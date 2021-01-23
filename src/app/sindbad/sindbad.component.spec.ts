import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SindbadComponent } from './sindbad.component';

describe('SindbadComponent', () => {
  let component: SindbadComponent;
  let fixture: ComponentFixture<SindbadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SindbadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SindbadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
