import { Component } from '@angular/core';
import { Show } from './models/show.model';
import { ShowService } from './services/show/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cinema-manager';

  shows: Array<Show>;

  constructor(private showService: ShowService) {
    this.shows = showService.shows.getValue();
  }

  ngOnInit() {
  }

}
