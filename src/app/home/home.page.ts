import { Component } from '@angular/core';

interface Book {
  book_name: string
  book_author: string
}


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
  myBooks: Book[] = [
    {book_name: "Война и мир", book_author: "Толстой"},
    {book_name: "Онегин", book_author: "Автор"}
  ]
  mybtn(){
    this.myname = this.myname + "!"
  }

}
