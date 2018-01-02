import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ModalModule} from 'ngx-bootstrap';
import {PaginationModule, BsDropdownModule} from 'ngx-bootstrap';
import {PageHeaderComponent} from './pageHeader/page-header.component';
import {AppHeaderComponent} from './appHeader/app-header.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ModalComponent} from './modal.component';
import {ErrorComponent} from './error.component';

@NgModule({
  declarations: [
    PageHeaderComponent, AppHeaderComponent, ModalComponent, BreadcrumbComponent, ErrorComponent
  ],
  entryComponents: [
    PageHeaderComponent, AppHeaderComponent, ModalComponent, BreadcrumbComponent, ErrorComponent
  ],
  exports: [
    PageHeaderComponent, AppHeaderComponent, ModalComponent, BreadcrumbComponent, ErrorComponent
  ],
  imports: [
    RouterModule, CommonModule, FormsModule, ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: []
})

export class AppCommonModule {}
