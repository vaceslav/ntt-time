import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITimeEntry } from '../../swagger';
import { AmazingTimePickerService } from 'amazing-time-picker';

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

  constructor(private timePickerService: AmazingTimePickerService) {}

  ngOnInit() {}

  onSubmit() {
    this.update.emit(this.item);
  }

  get start() {
    if (!this.item) {
      return undefined;
    }
    return this.formatInt(this.item.start.getHours()) + ':' + this.formatInt(this.item.start.getMinutes());
  }

  get end() {
    if (!this.item) {
      return undefined;
    }
    return this.formatInt(this.item.end.getHours()) + ':' + this.formatInt(this.item.end.getMinutes());
  }

  selectStart() {
    this.timePickerService
      .open({
        time: this.start
      })
      .afterClose()
      .subscribe(time => this.setStart(time));
  }

  selectEnd() {
    this.timePickerService
      .open({
        time: this.end
      })
      .afterClose()
      .subscribe(time => this.setEnd(time));
  }

  setStart(time: string): void {
    const myTime = this.parseStr(time);
    this.item.start.setHours(myTime.hour + 1);
    this.item.start.setMinutes(myTime.minutes + 1);
    this.update.emit(this.item);
  }

  setEnd(time: string): void {
    const myTime = this.parseStr(time);

    this.item.end.setDate(this.item.start.getDate());

    this.item.end.setHours(myTime.hour + 1);
    this.item.end.setMinutes(myTime.minutes + 1);
    this.update.emit(this.item);
  }

  updateTime($event) {
    // const test
  }

  private formatInt(num) {
    const s = '000000' + num;
    return s.substr(s.length - 2);
  }

  parseStr(input: string) {
    return {
      hour: +input.substr(0, 2),
      minutes: +input.substr(3, 2)
    };
  }
}
