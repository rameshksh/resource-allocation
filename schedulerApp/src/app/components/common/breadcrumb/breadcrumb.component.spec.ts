/* tslint:disable:no-unused-variable */
import { ActivatedRoute, Data } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreadcrumbComponent
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
    const fixture = TestBed.createComponent(BreadcrumbComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
