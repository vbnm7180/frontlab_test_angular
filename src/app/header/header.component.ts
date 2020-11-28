import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  //Кнопка сортировки
  filter() {
    //Получаем объект типа NodeListOf, состоящий из элементов HTMLElement
    var nodeList: NodeListOf<HTMLElement> = document.querySelectorAll(".list__block");
    //Преобразуем NodeListOf в массив Array из HTMLElement
    var arrayList: Array<HTMLElement> = Array.from(nodeList);
    //Выбираем select
    var filterSelector: HTMLInputElement = document.querySelector(".sort__types");
    //Получаем выбранное значение селекта
    var filterType:string = filterSelector.value;

    //Если в select выбрана сортировка по алфавиту
    if (filterType == "1") {
      //Сортируем массив с .list__block по тексту в алфавитном порядке
      arrayList.sort(function (a, b) {
        if (a.firstChild.textContent > b.firstChild.textContent) return 1;
        else return -1;
      });
    }
    // Если в select выбрана сортировка против алфавита
    if (filterType == "2") {
      //Сортируем массив с .list__block по тексту в обратном порядке
      arrayList.sort(function (a, b) {
        if (a.firstChild.textContent < b.firstChild.textContent) return 1;
        else return -1;
      });
    }

    //Удаляем все элемены списка
    document.querySelector(".list__container").innerHTML = "";

    //Добавляем отсортированные элементы списка
    var item: HTMLElement;
    for (item of arrayList) {
      document.querySelector(".list__container").appendChild(item);
    }

  }

  ngOnInit(): void {
  }

}
