import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCardsComponent } from './comments-cards.component';

describe('CommentsCardsComponent', () => {
  let component: CommentsCardsComponent;
  let fixture: ComponentFixture<CommentsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
