import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NajibMahfouzComponent } from './najib-mahfouz.component';

describe('NajibMahfouzComponent', () => {
  let component: NajibMahfouzComponent;
  let fixture: ComponentFixture<NajibMahfouzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NajibMahfouzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NajibMahfouzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
