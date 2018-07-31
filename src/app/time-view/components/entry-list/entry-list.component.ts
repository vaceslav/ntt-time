import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../../shared/services/entries.service';

@Component({
  selector: 'time-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  public entries: string[];

  constructor(private entryService: EntriesService) {}

  ngOnInit() {
    this.entries = this.entryService.entries;

    this.entryService.getItems().subscribe(data => {
      this.entries = data;
    });
  }
}
