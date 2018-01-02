/* tslint:disable:no-unused-variable */
import { ActivatedRoute, Data } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHeaderComponent } from './page-header.component';
import {BreadcrumbComponent} from '../breadcrumb/breadcrumb.component';

describe('PageHeaderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageHeaderComponent,BreadcrumbComponent
      ],
      imports:[RouterTestingModule],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      }]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
