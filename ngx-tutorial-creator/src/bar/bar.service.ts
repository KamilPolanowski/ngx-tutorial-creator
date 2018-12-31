import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BarService {

  get value(): Observable<string> {
    return of(true).pipe(map(val => `${val}`));
  }

}
