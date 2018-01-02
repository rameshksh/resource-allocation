/* tslint:disable:no-unused-variable */
import {EventEmitter} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TestBed, async} from '@angular/core/testing';
import {AppHeaderComponent} from './app-header.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap';

describe('AppHeaderComponent', () => {
  beforeEach(() => {
    let bsModalServiceStub = {};

    TestBed.configureTestingModule({
      declarations: [AppHeaderComponent],
      imports: [
        RouterTestingModule, ModalModule.forRoot()
      ],
      providers: [
        {
          provide: BsModalService,
          useClass: BsModalService
        }, {
          provide: BsModalRef,
          useClass: BsModalRef
        }
      ]
    });

    // sharedServiceStub = TestBed.get(SharedService); bsModalServiceStub =
    // TestBed.get(BsModalService);

    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have toggleLeftNav defined`, async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.toggleLeftNav).toBeDefined();
  }));

  it('should have openModalWithAlertComponent defined', async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    //fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.openModalWithAlertComponent).toBeDefined();
  }));
});
