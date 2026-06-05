import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TableRow {
  name: string;
  age: number | null;
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
    { name: 'Анна', age: 25 },
    { name: 'Иван', age: 30 },
    { name: 'Мария', age: 22 }
  ];

  addRow() {
    const newRow: TableRow = {
      name: 'Новый',
      age: 0
    };
    this.tableData.push(newRow);
  }

  deleteRow(index: number) {
    this.tableData.splice(index, 1);
  }
}