import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
   }
 
    calendarOptions:CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [ dayGridPlugin ],

    events:[ { title: 'Event 1', date: '2023-08-19' }, { title: 'Event 2', date: '2023-08-28' }],
   };
}
