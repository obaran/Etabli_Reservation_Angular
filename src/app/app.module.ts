import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './components/reservation-edit/reservation-edit.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    ReservationListComponent,
    ReservationEditComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
