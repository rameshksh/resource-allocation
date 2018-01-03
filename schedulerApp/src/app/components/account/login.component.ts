
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./account.component.scss']
})

export class LoginComponent{
  errorMessage: string = ''

  constructor(public route : Router){

  }

  onSubmit(f: NgForm){
    this.route.navigate(['\dashboard']);
  }
}
