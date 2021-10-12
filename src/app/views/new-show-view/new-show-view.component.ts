import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-new-show-view',
  templateUrl: './new-show-view.component.html',
  styleUrls: ['./new-show-view.component.css']
})
export class NewShowViewComponent implements OnInit {


  constructor(private showService: ShowService,
              private router: Router) { 

  }

  ngOnInit(): void {
  }

  addShow(showToAdd: Show) {
    this.showService
      .addShow(showToAdd)
      .then(() => {
        this.router.navigateByUrl('home');
      })  
  }

}
