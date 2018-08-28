import { Component, OnInit, Input } from '@angular/core';
import { ITimeEntry } from '../../swagger';

@Component({
  selector: 'time-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input()
  item: ITimeEntry;

  constructor() {}

  ngOnInit() {}
}
