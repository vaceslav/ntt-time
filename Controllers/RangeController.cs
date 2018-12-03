using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NttTimeApi.Db;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace ntt_time.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RangeController : ControllerBase
    {
        private readonly NttDbContext _context;

        public RangeController(NttDbContext context)
        {
            _context = context;
        }

        [HttpPost("timeentry/{timeEntryId}/addrange/{start}")]
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

        [HttpPut("timeentry/{timeEntryId}/range/{rangeId}")]
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
    }
}