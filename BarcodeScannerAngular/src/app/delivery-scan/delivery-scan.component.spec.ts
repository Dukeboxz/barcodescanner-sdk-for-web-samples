import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryScanComponent } from './delivery-scan.component';

describe('DeliveryScanComponent', () => {
  let component: DeliveryScanComponent;
  let fixture: ComponentFixture<DeliveryScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
