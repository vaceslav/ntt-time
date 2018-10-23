using System.Linq;
using GraphQL.Types;
using NttTimeApi.Db;

namespace  NttTimeApi.GraphQL
{
    public class TimeEntryQuery : ObjectGraphType
    {
        public TimeEntryQuery(NttDbContext dbContext)
        {
            Field<TimeEntryType>(
                "timeentry",
                arguments: new QueryArguments(new QueryArgument<IntGraphType> { Name = "id" }),
                resolve: context =>  {
                    var id = context.GetArgument<int>("id");
                    return dbContext.TimeEntries.FirstOrDefault(i => i.Id == id);
                });

                //dbContext.TimeEntries.First(i => i.Id == context.GetArgument<int>("id")));


            Field<ListGraphType<TimeEntryType>>(
                "players",
                resolve: context => dbContext.TimeEntries.ToList());
        }
    }
}