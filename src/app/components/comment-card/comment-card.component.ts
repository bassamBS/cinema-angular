import { Component, Input, OnInit } from '@angular/core';
import { CommentShow } from 'src/app/models/commentShow.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() commentShow: CommentShow;

  constructor() { }

  ngOnInit(): void {
  }

}
