import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  myname: string = "Ivan Alekseevich"
  mylist: string[] = ["1984", "471 градус по F", "Марадёр", "Патфайндер", "Ищейка", "Пицца", "А места здесь тихие", "Гарри Потер", "Escape From Tarkov", "Пикник на обочине"]

}
