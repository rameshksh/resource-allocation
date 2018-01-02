import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';

@NgModule({declarations: [LoginComponent], entryComponents: [LoginComponent], exports: [LoginComponent], imports: [CommonModule], providers: []})

export class AccountModule {}
