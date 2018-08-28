import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../../shared/services/entries.service';
import { ITimeEntry, TimeEntryClient } from '../../../shared/swagger';

@Component({
  selector: 'time-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  public entries: ITimeEntry[];

  constructor(private entriesService: EntriesService, private timeEntryClient: TimeEntryClient) {}

  ngOnInit() {
    this.timeEntryClient.get().subscribe(items => {
      this.entries = items;
    });

    // this.entriesService.getItems().subscribe(items => {
    //   this.entries = items;
    // });
  }

  deleteClick() {
    this.timeEntryClient.delete(1).subscribe(() => {
      this.timeEntryClient.get().subscribe(items => {
        this.entries = items;
      });
    });
  }
}
