import { Component } from '@angular/core';

const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2024,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  petsData = petsData;
  constructor() { }
  calculateAge(birthYear: number): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age > 0 ? age.toString() : "Less than a year";
  }
}