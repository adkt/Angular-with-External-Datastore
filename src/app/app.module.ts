import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { CPeopleComponent } from './c-people/c-people.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [ AppComponent, CPeopleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDataService, PersonService]
})
export class AppModule { }
