using GraphQL.Types;
using NttTimeApi.Db;

namespace NttTimeApi.GraphQL
{
    public class TimeEntryType : ObjectGraphType<TimeEntry>
    {
        public TimeEntryType(NttDbContext context)
        {
            Field(x => x.Id);
            Field(x => x.Start);
            Field(x => x.End);
        }

    }
}