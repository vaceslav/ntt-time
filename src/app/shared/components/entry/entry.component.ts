import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  deleteClick($event: MouseEvent) {
    $event.stopPropagation();
    this.delete.emit();
  }
}
