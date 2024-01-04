import { Component } from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etabli-reservation';

  topFunction() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth'});
  }
  
    openCalendarModal() {
      $('#calendarModal').modal('show');
    }
  }

 