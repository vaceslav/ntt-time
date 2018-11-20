using System;
using System.Collections.Generic;

public class SearchResult
{
    public SearchResult()
    {
    }

    public int TotalCount { get; set; }
    public List<TimeEntry> Items { get; set; }
}