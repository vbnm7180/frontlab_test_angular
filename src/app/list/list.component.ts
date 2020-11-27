import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { User } from './user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserInfoService]
})
export class ListComponent implements OnInit {

  users:User[];

  constructor(private uiserv: UserInfoService,private renderer: Renderer2) { }

  showUsername(user:User){
    
    return user.name.title + " " + user.name.first + " " + user.name.last;

  }

  openPopup(e:MouseEvent){

    var popup = (<HTMLElement>e.target).closest(".list__item").nextSibling;

    this.renderer.setStyle(popup,'display','block');

  }

  ngOnInit(): void {

    this.uiserv.getData().subscribe((data) => { this.users = data["results"]; });

  }

}
