import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DromedariesComponent } from './dromedaries.component';

describe('DromedariesComponent', () => {
  let component: DromedariesComponent;
  let fixture: ComponentFixture<DromedariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DromedariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DromedariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
