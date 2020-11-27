import { Component, Input, OnInit } from '@angular/core';
import { User } from '../list/user';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() users:User[];
  i:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.i);
  }

}
