import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  products = [
    {name: "Сок", price: 54, quantity: 1},
    {name: "Чай", price: 76, quantity: 5}
  ];
  clicks = this.getQuantity(); 
  totalPrices = this.getTotalPrices();
  getQuantity() {
    return this.products.reduce((sumQuantity, item) => sumQuantity + item.quantity, 0);
  }
  getTotalPrices() {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }
  onChanged(event: boolean) {
    console.log(event);
    event == true ? this.clicks++ : this.clicks--;
    this.totalPrices = this.getTotalPrices();
  }
}