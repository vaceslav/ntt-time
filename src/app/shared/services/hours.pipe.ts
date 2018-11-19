import { Injectable, PipeTransform, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITimeEntry } from '../swagger';

@Pipe({ name: 'hours' })
export class HourPipe implements PipeTransform {
  constructor() {}

  transform(value: number, ...args: any[]) {
    return value / 60;
  }
}
