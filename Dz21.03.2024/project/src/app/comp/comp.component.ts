import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  isCase: boolean = false;
  fontSize: number = 16; // default font size
  selectedOption: string = "value1";
  toggleBold() {
    this.isBold = !this.isBold;
  }
  toggleItalic() {
    this.isItalic = !this.isItalic;
  }
  toggleUnderline() {
    this.isUnderline = !this.isUnderline;
  }
  toggleCase() {
    this.isCase = !this.isCase;
  }
}