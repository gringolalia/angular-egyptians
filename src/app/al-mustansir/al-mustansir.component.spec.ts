import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlMustansirComponent } from './al-mustansir.component';

describe('AlMustansirComponent', () => {
  let component: AlMustansirComponent;
  let fixture: ComponentFixture<AlMustansirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlMustansirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlMustansirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
