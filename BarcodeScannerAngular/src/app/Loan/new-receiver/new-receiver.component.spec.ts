import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReceiverComponent } from './new-receiver.component';

describe('NewReceiverComponent', () => {
  let component: NewReceiverComponent;
  let fixture: ComponentFixture<NewReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReceiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
