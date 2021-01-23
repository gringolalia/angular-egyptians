import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedCairenseComponent } from './ahmed-cairense.component';

describe('AhmedCairenseComponent', () => {
  let component: AhmedCairenseComponent;
  let fixture: ComponentFixture<AhmedCairenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhmedCairenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhmedCairenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
