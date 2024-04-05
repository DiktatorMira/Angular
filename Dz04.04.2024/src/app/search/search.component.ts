import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  title: string = '';
  type: string = 'movie';
  isTouched: boolean = false;
  films: any[] = [];
  constructor(private httpService: HttpService, private router: Router, private titleService: Title) {}
  ngOnInit(): void { this.titleService.setTitle('Поиск'); }
  submit() {
    this.httpService.getMovies(this.title, this.type).subscribe(
      (data: any) => {
        if (data && data.Search) {
          this.films = data.Search;
          console.log(this.films);
        } 
        else{
          alert("Фильмы не найдены!");
          this.films = [];
        }
      }, (error) => {
        console.log('Ошибка:', error);
        this.films = [];
      }
    );
    this.isTouched = true;
  }
  showDetails(imdbID: string) { this.router.navigate(['/film', imdbID]); }
}
