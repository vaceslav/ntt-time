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
    public class ProjectController : ControllerBase
    {
        private readonly NttDbContext _context;

        public ProjectController(NttDbContext context)
        {
            _context = context;
        }

        
        // GET api/values
        [HttpGet]
        [ProducesResponseType(typeof(Project[]), 200)]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _context.Project.ToArrayAsync());
        }
    }
}