import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuNuwasComponent } from './abu-nuwas.component';

describe('AbuNuwasComponent', () => {
  let component: AbuNuwasComponent;
  let fixture: ComponentFixture<AbuNuwasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbuNuwasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbuNuwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
