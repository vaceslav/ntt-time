using Microsoft.EntityFrameworkCore;

namespace NttTimeApi.Db
{
    public class NttDbContext : DbContext
    {
        public NttDbContext(DbContextOptions<NttDbContext> options) : base(options)
        {
        }

        public DbSet<TimeEntry> TimeEntries { get; set; }

        public DbSet<TimeRange> TimeRange  { get; set; }

        public DbSet<Project> Project { get; set; }
    }
}