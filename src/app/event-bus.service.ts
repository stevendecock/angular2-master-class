import { Injectable } from '@angular/core';
import {Subject, Observer} from "rxjs";

@Injectable()
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this._messages$.next(new EventBusArgs(eventType, data))
  }

  observe(eventType: string) {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }

}

class EventBusArgs {
  type: string;
  data: any;

  constructor(type: string, data: any) {
    this.type = type;
    this.data = data;
  }

}
