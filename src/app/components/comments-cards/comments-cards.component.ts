import { Component, Input, OnInit } from '@angular/core';
import { CommentShow } from 'src/app/models/commentShow.model';

@Component({
  selector: 'app-comments-cards',
  templateUrl: './comments-cards.component.html',
  styleUrls: ['./comments-cards.component.css']
})
export class CommentsCardsComponent implements OnInit {

  @Input() commentsShow: Array<CommentShow>;

  constructor() { }

  ngOnInit(): void {
  }

}
