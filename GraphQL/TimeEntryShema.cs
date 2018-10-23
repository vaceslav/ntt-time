using GraphQL;
using GraphQL.Types;

namespace NttTimeApi.GraphQL
{
    public class TimeEntryShema : Schema
    {
        public TimeEntryShema(IDependencyResolver resolver): base(resolver)
        {
            Query = resolver.Resolve<TimeEntryQuery>();
        }
    }
}
