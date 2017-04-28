import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { EventsComponent } from './components/events.component';
import { TeamComponent } from './components/team.component';
import { ContactComponent } from './components/contact.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
