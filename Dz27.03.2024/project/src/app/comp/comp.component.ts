import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  users: any[] = [];
  userName: string = '';
  salary: number | null = null;
  date: string = '';
  isEditMode: boolean = false;
  editedUserIndex: number = -1;
  addUser() {
    if (this.userName && this.salary !== null && this.date) {
      this.users.push({
        name: this.userName,
        salary: this.salary,
        date: this.date
      });
      this.clearFields();
    }
  }
  saveUser() {
    if (this.editedUserIndex !== -1) {
      this.users[this.editedUserIndex] = {
        name: this.userName,
        salary: this.salary,
        date: this.date
      };
      this.clearFields();
      this.isEditMode = false;
    }
  }
  removeUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
  editUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.userName = user.name;
      this.salary = user.salary;
      this.date = user.date;
      this.isEditMode = true;
      this.editedUserIndex = index;
    }
  }
  clearFields() {
    this.userName = '';
    this.salary = null;
    this.date = '';
  }
}