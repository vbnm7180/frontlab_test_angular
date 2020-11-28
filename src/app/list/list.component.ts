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

  //Массив из объектов User для хранения json с сервера
  users:User[];

  //Добавляем переменные в конструктор для использования встроенных классов UserInfoService и Renderer2
  constructor(private uiserv: UserInfoService,private renderer: Renderer2) { }

  //Метод для создания правильного имени пользователя, который будет отображаться в списке 
  showUsername(user:User){
    return user.name.title + " " + user.name.first + " " + user.name.last;
  }

  //Открытие модального окна
  openPopup(e:MouseEvent){
    //Выбирается popup
    var popup = (<HTMLElement>e.target).closest(".list__item").nextSibling;
    //Используется метод у renderer для изменения стиля
    this.renderer.setStyle(popup,'display','block');

  }

  //Закрытие модального окна
  closePopup(e:MouseEvent){
    //Выбирается popup
    var popup = (<HTMLElement>e.target).closest(".popup");
    //Используется метод у renderer для изменения стиля
    this.renderer.setStyle(popup,'display','none');
  }

  //При отрисовке получаем список пользователей и заносим их в массив users компонента
  ngOnInit(): void {
    //data - принимаемый json
    this.uiserv.getData().subscribe((data) => { this.users = data["results"]; });
  }

}
