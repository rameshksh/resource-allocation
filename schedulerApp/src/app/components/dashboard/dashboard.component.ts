import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{

  constructor(public route : Router){

  }

  enrollBusinessBrand(){
    this.route.navigate(['scheduler','enroll-business-brand']);
  }
}
