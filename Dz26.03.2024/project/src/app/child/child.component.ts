import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() product: any;
  @Output() quantityChanged = new EventEmitter<number>();
  constructor() {}
  incrementQuantity() {
    this.quantityChanged.emit(1);
  }
  decrementQuantity() {
    if (this.product.quantity > 0) this.quantityChanged.emit(-1);
  }
}
