import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormFormatComponent } from './display-form-format.component';

describe('DisplayFormFormatComponent', () => {
  let component: DisplayFormFormatComponent;
  let fixture: ComponentFixture<DisplayFormFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFormFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFormFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
