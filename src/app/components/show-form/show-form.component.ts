import { Component, Input, OnInit, Output } from '@angular/core';
import { Show } from 'src/app/models/show.model';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  @Input() title: string;
  @Input() submitLabel: string;
  @Input() showToEdit: Show;

  @Output() formSubmitted: EventEmitter<Show>;

  showForm: FormGroup;
  show: Show;
  // Created to populate the date field
  releaseDate: string;

  constructor(private fb: FormBuilder) { 
    this.formSubmitted = new EventEmitter<Show>();
  }

  ngOnInit(): void {
    this.initForm();

    if (this.showToEdit) {
      this.show = this.showToEdit;
      let date = this.show.releaseDate;
      // Returns a string to format YYYY-MM-DD 
      // don't use toISOString, it returns the wrong date (current day - 1)
      this.releaseDate = date.getFullYear() + "-" 
        + ('0' + (date.getMonth() + 1)).slice(-2)  + "-" 
        + ('0' + date.getDate()).slice(-2);
    }
    else {
      this.show = new Show('', new Date(), 1, '', '', '',);
      // Returns a string to format YYYY-MM-DD works well with new Date()
      this.releaseDate = new Date().toISOString().split('T')[0];
    }

  }

  onSubmitShowForm() {
    if (this.showForm.valid) {
      // the input date returns a string we need to cast it to a Date object
      this.show.releaseDate = new Date(Date.parse(this.releaseDate));
      this.formSubmitted.emit(this.show);
    }
  }

  private initForm() {
    this.showForm = this.fb.group({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      releaseDate: new FormControl(null, [
        Validators.required
      ]),
      seasons: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000)
      ]),
      critic: new FormControl(null, [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000)
      ]),
      poster: new FormControl(null, [
        Validators.required
      ]),
      
    });
  }


}
