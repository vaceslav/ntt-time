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

        [HttpPost("")]
        [ProducesResponseType(typeof(TimeEntry), 200)]
        public async Task<IActionResult> Create([FromBody] TimeEntry entry)
        {

            Thread.Sleep(5000);

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

    }
}
