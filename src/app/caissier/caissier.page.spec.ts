import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaissierPage } from './caissier.page';

describe('CaissierPage', () => {
  let component: CaissierPage;
  let fixture: ComponentFixture<CaissierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaissierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaissierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
