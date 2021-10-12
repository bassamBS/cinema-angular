import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-edit-show-view',
  templateUrl: './edit-show-view.component.html',
  styleUrls: ['./edit-show-view.component.css']
})
export class EditShowViewComponent implements OnInit {

  show: Show;

  constructor(private route: ActivatedRoute,
              private showService: ShowService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.showService
      .getShowById(id)
      .then((showFound : Show) => this.show = showFound);
    
  }

  editShow(editedShow: Show) {
    this.showService
      .editShow(editedShow)
      .then(() => this.router.navigate(['/shows', editedShow.id]))
  }

}
