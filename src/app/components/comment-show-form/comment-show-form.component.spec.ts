import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentShowFormComponent } from './comment-show-form.component';

describe('CommentShowFormComponent', () => {
  let component: CommentShowFormComponent;
  let fixture: ComponentFixture<CommentShowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentShowFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentShowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
