import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  auditoriums = [
    { name: 'Аудитория 1', seats: 15, faculty: 'Факультет 1' },
    { name: 'Аудитория 2', seats: 20, faculty: 'Факультет 2' },
    { name: 'Судитория 3', seats: 12, faculty: 'Факультет 1' },
    { name: 'Будитория 4', seats: 18, faculty: 'Факультет 3' },
    { name: 'Дудитория 5', seats: 10, faculty: 'Факультет 2' }
  ];
  groups = [
    { name: 'Группа 1', students: 25, faculty: 'Факультет 1' },
    { name: 'Группа 2', students: 30, faculty: 'Факультет 2' },
    { name: 'Группа 3', students: 20, faculty: 'Факультет 1' },
    { name: 'Группа 4', students: 35, faculty: 'Факультет 3' },
    { name: 'Группа 5', students: 28, faculty: 'Факультет 2' }
  ];
  displayedAuditoriums:any = [];
  displayAllAuditoriums() {
    this.displayedAuditoriums = this.auditoriums;
  }
  displayAuditoriumsByFaculty() {
    const faculty = prompt('Введите название факультета:');
    this.displayedAuditoriums = this.auditoriums.filter(auditorium => auditorium.faculty === faculty);
  }
  displayAuditoriumsByGroup() {
    const groupName = prompt('Введите название группы:'), group = this.groups.find(group => group.name === groupName);
    if (group) this.displayedAuditoriums = this.auditoriums.filter(auditorium => auditorium.faculty === group.faculty);
    else alert('Группа не найдена');
  }
  sortAuditoriumsBySeats() {
    this.displayedAuditoriums = this.displayedAuditoriums.slice().sort((a:any, b:any) => a.seats - b.seats);
  }
  sortAuditoriumsByName() {
    this.displayedAuditoriums = this.displayedAuditoriums.slice().sort((a:any, b:any) => a.name.localeCompare(b.name));
  }
}
