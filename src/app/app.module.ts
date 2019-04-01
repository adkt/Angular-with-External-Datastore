import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDataService, PersonService]
})
export class AppModule { }
