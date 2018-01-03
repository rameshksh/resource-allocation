import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AppCommonModule} from '../common/common.module';

@NgModule({
  declarations: [DashboardComponent],
  entryComponents: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    RouterModule, AppCommonModule
  ],
  providers: []
})

export class DashboardModule {

}
