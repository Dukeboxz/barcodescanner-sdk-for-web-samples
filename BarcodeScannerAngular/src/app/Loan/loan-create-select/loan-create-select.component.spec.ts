import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCreateSelectComponent } from './loan-create-select.component';

describe('LoanCreateSelectComponent', () => {
  let component: LoanCreateSelectComponent;
  let fixture: ComponentFixture<LoanCreateSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanCreateSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCreateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
