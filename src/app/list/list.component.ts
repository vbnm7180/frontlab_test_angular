import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { User } from './user';
import { PopupComponent } from '../popup/popup.component'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserInfoService]
})
export class ListComponent implements OnInit {

  users:User[];

  constructor(private uiserv: UserInfoService) { }

  showUsername(user:User){
    
    return user.name.title + " " + user.name.first + " " + user.name.last;

  }





  ngOnInit(): void {



    this.uiserv.getData().subscribe((data) => { this.users = data["results"]; });

  }

}
