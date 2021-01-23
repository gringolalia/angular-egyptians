import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliBabaComponent } from './ali-baba.component';

describe('AliBabaComponent', () => {
  let component: AliBabaComponent;
  let fixture: ComponentFixture<AliBabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliBabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliBabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
