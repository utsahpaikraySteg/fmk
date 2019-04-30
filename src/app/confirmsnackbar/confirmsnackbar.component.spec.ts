import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmsnackbarComponent } from './confirmsnackbar.component';

describe('ConfirmsnackbarComponent', () => {
  let component: ConfirmsnackbarComponent;
  let fixture: ComponentFixture<ConfirmsnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmsnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmsnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
