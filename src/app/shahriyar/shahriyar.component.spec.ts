import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahriyarComponent } from './shahriyar.component';

describe('ShahriyarComponent', () => {
  let component: ShahriyarComponent;
  let fixture: ComponentFixture<ShahriyarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShahriyarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahriyarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
