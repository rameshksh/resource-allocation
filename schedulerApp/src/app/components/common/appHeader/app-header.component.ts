import {Component, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';
import { BsModalService , BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-header-component',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']})

export class AppHeaderComponent {
  bsModalRef: BsModalRef;

  constructor(public modalService: BsModalService) {

  }
}
