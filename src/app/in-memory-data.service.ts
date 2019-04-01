import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Person } from './person'

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const people = [
      { id: 11, name: 'Person 1' },
      { id: 12, name: 'Person 2' },
      { id: 13, name: 'Person 3' },
      { id: 14, name: 'Person 4' },
      { id: 15, name: 'Person 5' },
      { id: 16, name: 'Person 6' },
      { id: 17, name: 'Person 7' },
      { id: 18, name: 'Person 8' },
      { id: 19, name: 'Person 9' },
      { id: 20, name: 'Person 10' }
    ];
    return {people};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the array is empty, the method below returns the initial number (11). if the array is not empty, the method below returns the highest hero id + 1.
  genId(people: Person[]): number {
    return people.length > 0 ? Math.max(...people.map(person => person.id)) + 1 : 11;
  }
}