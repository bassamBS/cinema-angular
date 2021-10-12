import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: '[app-shows-table-line]',
  templateUrl: './shows-table-line.component.html',
  styleUrls: ['./shows-table-line.component.css']
})
export class ShowsTableLineComponent implements OnInit {

  @Input() show: Show; 

  constructor(private serviceShow: ShowService) { }

  ngOnInit(): void {
  }

  onClickDeleteShow() {
    this.serviceShow.deleteShow(this.show.id)
  }

}
