import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockitoComponent } from './mockito.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MockitoComponent', () => {
  let component: MockitoComponent;
  let fixture: ComponentFixture<MockitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockitoComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
