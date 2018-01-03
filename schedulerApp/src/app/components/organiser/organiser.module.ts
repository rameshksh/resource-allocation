import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Router, Routes} from '@angular/router';
import {EnrollBusinessBrandComponent} from './enroll-business-brand.component';
import {AppCommonModule} from '../common/common.module';

@NgModule({
  declarations: [EnrollBusinessBrandComponent],
  entryComponents: [EnrollBusinessBrandComponent],
  exports: [EnrollBusinessBrandComponent],
  imports: [
    RouterModule, AppCommonModule, FormsModule
  ],
  providers: []
})
export class OrganiserModule {}
