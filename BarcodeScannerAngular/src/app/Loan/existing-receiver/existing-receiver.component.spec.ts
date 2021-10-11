import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingReceiverComponent } from './existing-receiver.component';

describe('ExistingReceiverComponent', () => {
  let component: ExistingReceiverComponent;
  let fixture: ComponentFixture<ExistingReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingReceiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
