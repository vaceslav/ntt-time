import { Injectable, PipeTransform, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITimeEntry } from '../swagger';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  constructor() {}

  transform(value: number, ...args: any[]) {
    return this.formatTime(value);
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
}
