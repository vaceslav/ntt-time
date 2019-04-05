using System;
using System.Collections.Generic;

public class ProcessDocument
{
    public ProcessDocument()
    {
    }

    public int Id { get; set; }

    public string Name  { get; set; }
    public string DocumentType  { get; set; }

    public List<DocumentInfo> Infos  { get; set; }



    
}