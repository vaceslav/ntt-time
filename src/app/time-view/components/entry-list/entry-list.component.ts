import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../../shared/services/entries.service';

@Component({
  selector: 'time-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  public entries: string[];

  constructor(private entriesService: EntriesService) {}

  ngOnInit() {
    this.entries = this.entriesService.items;

    this.entriesService.getItems().subscribe(items => {
      this.entries = items;
    });
  }
}
