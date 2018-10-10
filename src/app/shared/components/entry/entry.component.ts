import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITimeEntry } from '../../swagger';

@Component({
  selector: 'time-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input()
  item: ITimeEntry;

  @Output()
  delete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteClcik() {
    this.delete.emit();
  }
}
