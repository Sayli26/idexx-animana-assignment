import { Component } from '@angular/core';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'animana-frontend-assignment';
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
    });
  }
}
