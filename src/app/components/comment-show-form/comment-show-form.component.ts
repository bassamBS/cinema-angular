import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentShow } from 'src/app/models/commentShow.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-show-form',
  templateUrl: './comment-show-form.component.html',
  styleUrls: ['./comment-show-form.component.css']
})
export class CommentShowFormComponent implements OnInit {

  @Input() title: string;
  @Input() submitLabel: string;

  @Output() formSubmitted: EventEmitter<CommentShow>;

  commentShowForm: FormGroup;
  commentShow: CommentShow;


  constructor(private fb: FormBuilder) { 
    this.formSubmitted = new EventEmitter<CommentShow>();
  
  }

  ngOnInit(): void {
    this.initForm();
    this.commentShow = new CommentShow(new Date(), '', '');
  }

  onSubmitShowForm() {
    // The date is set when the form is submitted
    this.commentShow.date = new Date();
    this.formSubmitted.emit(this.commentShow);

    /** new CommentShow instance to avoid overwriting on the precedent one
    Don't keep this solution in Prod ! But helpful for submitting more than one comment in a row on the same page **/ 
    this.commentShow = new CommentShow(new Date(), '', '');
    this.commentShowForm.reset();
  }

  private initForm() {
    this.commentShowForm = this.fb.group({
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      content: new FormControl(null, [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(500)
      ])
    })
  }

  


}