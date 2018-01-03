import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'

@NgModule({declarations: [LoginComponent], entryComponents: [LoginComponent], exports: [LoginComponent], imports: [CommonModule,FormsModule], providers: []})

export class AccountModule {}
