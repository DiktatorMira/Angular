import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  answers = [
    {
      type: 'yes',
      text: 'Да',
    }, {
      type: 'no',
      text: 'Нет',
    },
  ];
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.pattern(/\w{4,10}/)]],
      confirmPass: ['', [Validators.required]],
      lang: ['', Validators.required],
      answ: ['', Validators.required],
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+380\d{9}$/)]]
    }, { validator: this.passwordMatchValidator });
    this.form.get('phone')?.valueChanges.subscribe(value => {
      const phoneWithoutSpaces = value.replace(/\s/g, '');
      this.form.get('phone')?.setValue(phoneWithoutSpaces);
    });
  }
  passwordMatchValidator(form: FormGroup) {
    const passwordControl = form.get('pass'), confirmPassControl = form.get('confirmPass');
    if (!passwordControl || !confirmPassControl) return null;
    const password = passwordControl.value, confirmPassword = confirmPassControl.value;
    return password === confirmPassword ? null : { passwordMatch: true };
  }
  submitForm() { console.log(this.form); }
}