import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamidComponent } from './hamid.component';

describe('HamidComponent', () => {
  let component: HamidComponent;
  let fixture: ComponentFixture<HamidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
