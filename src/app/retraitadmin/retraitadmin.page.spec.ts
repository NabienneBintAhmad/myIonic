import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitadminPage } from './retraitadmin.page';

describe('RetraitadminPage', () => {
  let component: RetraitadminPage;
  let fixture: ComponentFixture<RetraitadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetraitadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraitadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
