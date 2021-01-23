import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadComponent } from './shahrazad.component';

describe('ShahrazadComponent', () => {
  let component: ShahrazadComponent;
  let fixture: ComponentFixture<ShahrazadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShahrazadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
