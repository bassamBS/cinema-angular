import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsTableLineComponent } from './shows-table-line.component';

describe('ShowsTableLineComponent', () => {
  let component: ShowsTableLineComponent;
  let fixture: ComponentFixture<ShowsTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
