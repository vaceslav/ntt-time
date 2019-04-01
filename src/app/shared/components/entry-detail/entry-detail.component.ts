import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ITimeEntry } from '../../swagger';
import {} from 'ngx-material-timepicker';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker/src/app/material-timepicker/ngx-material-timepicker.component';
import { first, map } from 'rxjs/operators';

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

  @ViewChild('fullTime') timePicker: any;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.update.emit(this.item);
  }

  get start() {
    if (!this.item) {
      return undefined;
    }
    return this.formatTime(this.item.start);
  }

  get end() {
    if (!this.item) {
      return undefined;
    }
    return this.formatTime(this.item.end);
  }

  async selectStart() {
    const time = await this.selectTimeAsync(this.item.start);
    this.item.start = time;
    this.update.emit(this.item);
  }

  async selectEnd() {
    const time = await this.selectTimeAsync(this.item.end);
    this.item.end = time;
    this.update.emit(this.item);
  }

  private selectTimeAsync(time?: number) {
    const timePicker: NgxMaterialTimepickerComponent = this.timePicker;
    this.setTimePicker(timePicker, time);

    timePicker.open();
    return timePicker.closed
      .asObservable()
      .pipe(
        first(),
        map(() => this.extractTime(timePicker))
      )
      .toPromise();
  }

  private setTimePicker(timePicker: NgxMaterialTimepickerComponent, time: number) {
    if (time) {
      const minutesOffset = time % 60;
      timePicker.selectedHour = {
        time: (time - minutesOffset) / 60,
        angle: 0
      };
      timePicker.selectedMinute = {
        time: minutesOffset,
        angle: 0
      };
    } else {
      timePicker.selectedHour = {
        time: new Date().getHours(),
        angle: 0
      };
      timePicker.selectedMinute = {
        time: new Date().getMinutes(),
        angle: 0
      };
    }
  }

  private extractTime(timePicker: NgxMaterialTimepickerComponent) {
    return timePicker.selectedHour.time * 60 + timePicker.selectedMinute.time;
  }

  updateTime($event) {
    // const test
  }

  private formatTime(time: number) {
    const minutes = time % 60;
    const hour = (time - minutes) / 60;
    return this.formatInt(hour) + ':' + this.formatInt(minutes);
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
