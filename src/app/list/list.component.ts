import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { PopupComponent } from '../popup/popup.component'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:any;

  constructor(private uiserv: UserInfoService) { }
    
  processData() {
      this.uiserv.getData().subscribe((data:any)=>{this.users=data});
    }

  ngOnInit(): void {


  }

}
