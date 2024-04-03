import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  answers = [
    {
      type: 'yes',
      text: 'Да',
    }, {
      type: 'no',
      text: 'Нет',
    },
  ];
  submitForm(form: NgForm) {
    console.log(form);
  }
}
