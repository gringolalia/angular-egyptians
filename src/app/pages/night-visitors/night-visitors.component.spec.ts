import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightVisitorsComponent } from './night-visitors.component';

describe('NightVisitorsComponent', () => {
  let component: NightVisitorsComponent;
  let fixture: ComponentFixture<NightVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
