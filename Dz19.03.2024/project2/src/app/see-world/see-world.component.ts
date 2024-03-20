import { Component } from '@angular/core';
import { articles1 } from '../articles';
import { articles2 } from '../articles';

@Component({
  selector: 'app-see-world',
  templateUrl: './see-world.component.html',
  styleUrl: './see-world.component.css'
})
export class SeeWorldComponent {
  articles1 = articles1; 
  articles2 = articles2; 
}
