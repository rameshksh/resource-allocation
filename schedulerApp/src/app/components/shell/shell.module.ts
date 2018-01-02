import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Router, Routes} from '@angular/router';
import {ShellComponent} from './shell.component';
import {AppCommonModule} from '../common/common.module';

@NgModule({declarations: [ShellComponent], entryComponents: [ShellComponent], exports: [ShellComponent], imports: [RouterModule, AppCommonModule], providers: []})
export class ShellModule {}
