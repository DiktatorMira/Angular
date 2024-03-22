import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component {
  selectedImage: string = ''; // Переменная для хранения пути к изображению
  // Метод для изменения изображения при выборе цвета
  changeImage(color: string): void {
    // Формируем путь к изображению на основе выбранного цвета
    this.selectedImage = `assets/images/${color}.jpg`;
  }
}
