import { Component, OnInit } from '@angular/core';

import { Person } from '../person';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-c-people',
  templateUrl: './c-people.component.html',
  styleUrls: ['./c-people.component.css']
})
export class CPeopleComponent implements OnInit {

  People: Person[];

  constructor(private personService:PersonService) { }

  ngOnInit() {
     this.getPeopleInit();
  }

  getPeopleInit(): void {
    this.personService.getPeople()
    .subscribe(person => this.People = person);
  }

}