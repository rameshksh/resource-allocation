import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './constants/module.constant';
import {AppRouting} from './app.route';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [
    FormsModule, CommonModule, BrowserModule, CoreModule, AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
