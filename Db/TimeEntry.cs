using System;
using System.Collections.Generic;

public class TimeEntry
{
    public TimeEntry()
    {
    }

    public int Id { get; set; }

    public DateTime Day {get; set; }

    public List<TimeRange> Ranges {get; set;}
    public int Start { get; set; }

    public int End { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public double? Duration { 
        get {
            return End - Start;
        }
     }
}