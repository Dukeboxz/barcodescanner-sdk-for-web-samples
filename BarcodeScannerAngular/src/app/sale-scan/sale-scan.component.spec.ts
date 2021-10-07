import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleScanComponent } from './sale-scan.component';

describe('SaleScanComponent', () => {
  let component: SaleScanComponent;
  let fixture: ComponentFixture<SaleScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
