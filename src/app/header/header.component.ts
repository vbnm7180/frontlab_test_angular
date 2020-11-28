import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  filter() {
    var nodeList: NodeListOf<HTMLElement> = document.querySelectorAll(".list__block");
    var arrayList: Array<HTMLElement> = Array.from(nodeList);
    var filterSelector: HTMLInputElement = document.querySelector(".sort__types");
    var filterType:string = filterSelector.value;

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

    document.querySelector(".list__container").innerHTML = "";

    var item: HTMLElement;
    for (item of arrayList) {
      document.querySelector(".list__container").appendChild(item);
    }

  }

  ngOnInit(): void {
  }

}
