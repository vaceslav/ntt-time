using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NttTimeApi.Db;

namespace ntt_time.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeEntryController : ControllerBase
    {

        private readonly NttDbContext _context;

        public TimeEntryController(NttDbContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        [ProducesResponseType(typeof(List<TimeEntry>), 200)]
        public async Task<IActionResult> Get()
        {
            return Ok(await _context.TimeEntries.ToListAsync());
        }

        // GET api/values/search
        [HttpPost("search")]
        [ProducesResponseType(typeof(SearchResult), 200)]
        public async Task<IActionResult> Search([FromBody] SearchRequest filter)
        {
            var count = await _context.TimeEntries.CountAsync();
            var result = await _context.TimeEntries
                                            .OrderBy(i => i.Start)
                                            .Skip(filter.PageIndex * filter.PageSize)
                                            .Take(filter.PageSize)
                                            .ToListAsync();

            return Ok(new SearchResult{TotalCount = count, Items = result});
        }

        // GET api/values
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TimeEntry), 200)]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _context.TimeEntries.Include(i => i.Ranges).FirstAsync(i => i.Id == id));
        }

        [HttpPost("")]
        [ProducesResponseType(typeof(TimeEntry), 200)]
        public async Task<IActionResult> Create([FromBody] TimeEntry entry)
        {
            entry.UpdatedAt = DateTime.Now;
            var result = await _context.TimeEntries.AddAsync(entry);
            _context.SaveChanges();
            return Ok(entry);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _context.TimeEntries.FirstAsync(i => i.Id == id);
            if(item != null){
                _context.Remove(item);
                _context.SaveChanges();
            }

            return Ok();
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(TimeEntry), 200)]
        public async Task<IActionResult> Update(int id, [FromBody] TimeEntry entry)
        {
            var item = await _context.TimeEntries.FirstAsync(i => i.Id == id);
            if(item != null){
                entry.UpdatedAt = DateTime.Now;
                _context.Entry(item).CurrentValues.SetValues(entry);
                _context.SaveChanges();
                return Ok(entry);
            }else{
                return NotFound();
            }
        }

         [HttpPut("updateRange")]
        [ProducesResponseType(typeof(TimeRange), 200)]
        public async Task<IActionResult> UpdateRange(int rangeId, [FromBody] TimeRange range)
        {
           

            var dbRange = await  _context.TimeRange.FirstOrDefaultAsync(r => r.Id == rangeId);

            if (dbRange == null)
            {
                return NotFound("Time Entry does not have range with this id");
            }

            _context.Entry(dbRange).CurrentValues.SetValues(range);
            dbRange.UpdatedAt = DateTime.Now;
            await _context.SaveChangesAsync();

            return Ok(dbRange);
        }


        [HttpGet("getForDay")]
        [ProducesResponseType(typeof(TimeRange[]), 200)]
        public async Task<IActionResult> GetForSpecificDay(DateTime day)
        {
            
            var entry = await _context.TimeEntries
            .Include(i => i.Ranges)
            .FirstOrDefaultAsync(i => i.Day.Year == day.Year && i.Day.Month == day.Month && i.Day.Day == day.Day);

            if(entry != null){
                return Ok(entry.Ranges);
            }            

            return Ok();
        }


        [HttpPost("{start}")]
        [ProducesResponseType(typeof(TimeRange), 200)]
        public async Task<IActionResult> AddRange(DateTime day, int start)
        {
            var entry = await _context.TimeEntries
            .Include(i => i.Ranges)
            .FirstOrDefaultAsync(i => i.Day.Year == day.Year && i.Day.Month == day.Month && i.Day.Day == day.Day);

            if (entry == null)
            {
                entry = new TimeEntry {
                    Day = day,
                    UpdatedAt = DateTime.Now
                };
                
                _context.TimeEntries.Add(entry);
                await _context.SaveChangesAsync();
            }

            var range = new TimeRange { 
                Start = start,
                End = start + 15, 
                UpdatedAt = DateTime.Now };
            if (entry.Ranges == null)
            {
                entry.Ranges = new List<TimeRange>();
            }
            entry.Ranges.Add(range);

            await _context.SaveChangesAsync();

            return Ok(range);
        }

    }
}
