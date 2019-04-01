import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Person } from './person'

@Injectable()
export class PersonService {

  private peopleUrl = 'api/people';

  constructor(
     private http: HttpClient
  ) { }

  getPeople():Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

}