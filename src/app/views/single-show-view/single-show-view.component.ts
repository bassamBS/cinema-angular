import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentShow } from 'src/app/models/commentShow.model';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-single-show-view',
  templateUrl: './single-show-view.component.html',
  styleUrls: ['./single-show-view.component.css']
})
export class SingleShowViewComponent implements OnInit {

  show: Show;
  id: number;
  
  constructor(private showService: ShowService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.showService
      .getShowById(this.id)
      .then((showFound : Show) => this.show = showFound)

  }

  addComment(commentShowAdd: CommentShow) {
    this.showService.addCommentShow(commentShowAdd, this.id);
  }




}
