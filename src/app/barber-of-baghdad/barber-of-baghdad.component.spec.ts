import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberOfBaghdadComponent } from './barber-of-baghdad.component';

describe('BarberOfBaghdadComponent', () => {
  let component: BarberOfBaghdadComponent;
  let fixture: ComponentFixture<BarberOfBaghdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberOfBaghdadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberOfBaghdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
