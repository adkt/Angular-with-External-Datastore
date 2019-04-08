import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import { Person } from './person'

@Injectable()
export class PersonService {

  private peopleUrl = 'api/people';

  constructor(
     private http: HttpClient
  ) { }

  getPeople():Observable<Person[]> {
    var test = "api/cars";
    return this.http.get<Person[]>(this.peopleUrl).pipe(
        tap(_ => this.log('GET successful'))
    );
  }

  private log(message: string) {
    console.log(message);
  }

}