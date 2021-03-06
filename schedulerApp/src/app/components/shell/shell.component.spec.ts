/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule } from '@angular/router/testing';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShellComponent
      ],
      imports:[RouterTestingModule]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
