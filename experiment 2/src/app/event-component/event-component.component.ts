import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-component.component.html',
  styleUrl: './event-component.component.css'
})
export class EventComponentComponent {
  events = [
    {
      event : "Socical Media",
      date:18,
      month : "March",
      venue: "Hitex Monument"
    },
    {
      event: "Javascript Meetup",
      date : 20,
      month : "February",
      venue: "City Auditorium"
    }
  ]
}
