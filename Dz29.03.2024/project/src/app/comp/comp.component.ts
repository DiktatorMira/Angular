import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  userName: string = '';
  salary: number | null = null;
  date: string = '';
  isEditMode: boolean = false;
  editedUserIndex: number = -1;
  users: any[] = [];
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
  addUser(): void {
    if (this.userName && this.salary !== null && this.date) {
      this.userService.addUser({
        name: this.userName,
        salary: this.salary,
        date: this.date
      });
      this.clearFields();
    }
  }
  saveUser(): void {
    if (this.editedUserIndex !== -1) {
      this.userService.updateUser(this.editedUserIndex, {
        name: this.userName,
        salary: this.salary,
        date: this.date
      });
      this.clearFields();
      this.isEditMode = false;
    }
  }
  removeUser(index: number): void {
    this.userService.removeUser(index);
  }
  editUser(index: number): void {
    const user = this.userService.getUsers()[index];
    if (user) {
      this.userName = user.name;
      this.salary = user.salary;
      this.date = user.date;
      this.isEditMode = true;
      this.editedUserIndex = index;
    }
  }
  clearFields(): void {
    this.userName = '';
    this.salary = null;
    this.date = '';
  }
}