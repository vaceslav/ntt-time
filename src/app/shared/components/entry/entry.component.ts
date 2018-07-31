import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'time-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() item: string;

  constructor() {}

  ngOnInit() {}
}
