import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormatDisplayComponent } from './form-format-display.component';

describe('FormFormatDisplayComponent', () => {
  let component: FormFormatDisplayComponent;
  let fixture: ComponentFixture<FormFormatDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFormatDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
