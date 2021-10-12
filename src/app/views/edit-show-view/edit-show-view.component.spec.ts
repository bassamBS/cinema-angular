import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShowViewComponent } from './edit-show-view.component';

describe('EditShowViewComponent', () => {
  let component: EditShowViewComponent;
  let fixture: ComponentFixture<EditShowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
