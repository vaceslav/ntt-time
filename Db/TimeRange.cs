using System;

public class TimeRange
{
    public int Id { get; set; }
    public int Start {get; set;}
    public int? End {get; set;}
    public Project Project {get; set;}
    public DateTime UpdatedAt { get; set; }
}