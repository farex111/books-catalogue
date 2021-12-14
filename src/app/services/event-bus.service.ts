import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface EventBus {
  key: string;
  data?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private eventBus$: Subject<EventBus>;
  constructor() {
    this.eventBus$ = new Subject<EventBus>();
  }
  emit(key: string, data?: unknown) {
    this.eventBus$.next({ key, data });
  }
  on<T>(key: string): Observable<T> {
    return this.eventBus$.asObservable().pipe(
      filter((event) => event.key === key),
      map((event) => event.data as T)
    );
  }
}
