using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NttTimeApi.Db;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace ntt_time.Controllers
{
    [Route("api/timeentry/{timeEntryId}/[controller]")]
    [ApiController]
    public class RangeController : ControllerBase
    {
        private readonly NttDbContext _context;

        public RangeController(NttDbContext context)
        {
            _context = context;
        }

        [HttpPost("{start}")]
        [ProducesResponseType(typeof(TimeRange), 200)]
        public async Task<IActionResult> Add(int timeEntryId, int start)
        {
            var entry = await _context.TimeEntries.FirstOrDefaultAsync(i => i.Id == timeEntryId);

            if (entry == null)
            {
                return NotFound("Time Entry not found");
            }

            var range = new TimeRange { Start = start, UpdatedAt = DateTime.Now };
            if (entry.Ranges == null)
            {
                entry.Ranges = new List<TimeRange>();
            }
            entry.Ranges.Add(range);

            await _context.SaveChangesAsync();

            return Ok(range);
        }

        [HttpGet("")]
        [ProducesResponseType(typeof(TimeRange[]), 200)]
        public async Task<IActionResult> GetAll(int timeEntryId)
        {
            var entry = await _context.TimeEntries
            .Include(i => i.Ranges)
            .FirstOrDefaultAsync(i => i.Id == timeEntryId);

            if (entry == null)
            {
                return NotFound("Time Entry not found");
            }

            return Ok(entry.Ranges);
        }

        [HttpPut("{rangeId}")]
        [ProducesResponseType(typeof(TimeRange), 200)]
        public async Task<IActionResult> Update(int timeEntryId, int rangeId, [FromBody] TimeRange range)
        {
            var entry = await _context.TimeEntries.Include(i => i.Ranges).FirstOrDefaultAsync(i => i.Id == timeEntryId);

            if (entry == null)
            {
                return NotFound("Time Entry not found");
            }


            var dbRange = entry.Ranges.FirstOrDefault(r => r.Id == rangeId);

            if (dbRange == null)
            {
                return NotFound("Time Entry does not have range with this id");
            }

            _context.Entry(dbRange).CurrentValues.SetValues(range);
            dbRange.UpdatedAt = DateTime.Now;
            await _context.SaveChangesAsync();

            return Ok(dbRange);
        }



        [HttpDelete("{rangeId}")]
        [ProducesResponseType(typeof(bool), 200)]
        public async Task<IActionResult> Delete(int timeEntryId, int rangeId)
        {
            var entry = await _context.TimeEntries.Include(i => i.Ranges).FirstOrDefaultAsync(i => i.Id == timeEntryId);

            if (entry == null)
            {
                return NotFound("Time Entry not found");
            }


            var dbRange = entry.Ranges.FirstOrDefault(r => r.Id == rangeId);

            if (dbRange == null)
            {
                return NotFound("Time Entry does not have range with this id");
            }


            entry.Ranges.Remove(dbRange);
            await _context.SaveChangesAsync();

            return Ok(true);
        }
    }

    // private class Test {
    //     public int[] Ranges {get; set;}

    //     public Test( int[] aRanges){
    //         Ranges = aRanges;
    //     }
    // }
}