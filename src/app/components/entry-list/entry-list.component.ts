import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'time-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.sass']
})
export class EntryListComponent implements OnInit {
  @Input() items: string[];

  constructor() {}

  ngOnInit() {}
}
