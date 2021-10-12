import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShowViewComponent } from './new-show-view.component';

describe('NewShowViewComponent', () => {
  let component: NewShowViewComponent;
  let fixture: ComponentFixture<NewShowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
