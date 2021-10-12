import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-shows-view',
  templateUrl: './shows-view.component.html',
  styleUrls: ['./shows-view.component.css']
})
export class ShowsViewComponent implements OnInit, OnDestroy {

  shows: Array<Show>;
  showsSub: Subscription;

  constructor(private showService: ShowService) {
  }

  ngOnInit(): void {
    this.showsSub = this.showService
    .shows
    .subscribe(
      (shows : Array<Show>) => this.shows = shows
    );
  }

  ngOnDestroy(): void {
    this.showsSub.unsubscribe();
  }

}
