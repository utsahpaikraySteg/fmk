import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaectiveformComponent } from './raectiveform.component';

describe('RaectiveformComponent', () => {
  let component: RaectiveformComponent;
  let fixture: ComponentFixture<RaectiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaectiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaectiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
