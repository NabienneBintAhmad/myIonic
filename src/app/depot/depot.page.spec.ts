import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotPage } from './depot.page';

describe('DepotPage', () => {
  let component: DepotPage;
  let fixture: ComponentFixture<DepotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
