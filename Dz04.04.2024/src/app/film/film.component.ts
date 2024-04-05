import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css',
})

export class FilmComponent implements OnInit {
  imdbID: string = '';
  data: any;
  constructor(private httpService: HttpService, private activatedRouter: ActivatedRoute, private router: Router, private titleService: Title) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.imdbID = params['imdbID'];
      this.httpService.getMoviesByID(this.imdbID).subscribe((data: any) => {
        this.data = data;
        if (this.data && this.data.Title) this.titleService.setTitle(this.data.Title);
      });
    });
  }
  back() { this.router.navigate(['search']); }
}
