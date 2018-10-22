using System;

public class TimeEntry
{
    public TimeEntry()
    {
    }

    public int Id { get; set; }
    public DateTime Start { get; set; }

    public DateTime End { get; set; }

    public DateTime UpdatedAt { get; set; }
}