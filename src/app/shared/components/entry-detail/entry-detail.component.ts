import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITimeEntry } from '../../swagger';

@Component({
  selector: 'time-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.scss']
})
export class EntryDetailComponent implements OnInit {
  @Input()
  item: ITimeEntry;

  @Output()
  update = new EventEmitter<ITimeEntry>();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.update.emit(this.item);
  }
}
