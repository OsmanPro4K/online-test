import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'Employee Assessment';
}
