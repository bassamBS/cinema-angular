import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show.model';

@Component({
  selector: 'app-shows-table',
  templateUrl: './shows-table.component.html',
  styleUrls: ['./shows-table.component.css']
})
export class ShowsTableComponent implements OnInit {

  @Input() shows: Array<Show>; 

  constructor() { }

  ngOnInit(): void {
  }

}
