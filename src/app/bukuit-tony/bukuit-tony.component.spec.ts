/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BukuitTonyComponent } from './bukuit-tony.component';

describe('BukuitTonyComponent', () => {
  let component: BukuitTonyComponent;
  let fixture: ComponentFixture<BukuitTonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuitTonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuitTonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
