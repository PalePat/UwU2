import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TableRow {
  name: string;
  age: number | null;
  email: string;  // 
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  public tableData: TableRow[] = [
    { name: 'Анна', age: 25, email: 'anna@mail.com' },
    { name: 'Иван', age: 30, email: 'ivan@mail.com' },
    { name: 'Мария', age: 22, email: 'maria@mail.com' }
  ];

  // Метод для добавления строки
  addRow() {
    const newRow: TableRow = {
      name: 'Новый пользователь',
      age: 0,
      email: 'new@mail.com'
    };
    this.tableData.push(newRow);
  }

  // Метод для удаления ПОСЛЕДНЕЙ строки
  deleteLastRow() {
    if (this.tableData.length > 0) {
      this.tableData.pop();  
    }
  }

  // Метод для удаления КОНКРЕТНОЙ строки (если нужно будет)
  deleteRow(index: number) {
    this.tableData.splice(index, 1);
  }
}