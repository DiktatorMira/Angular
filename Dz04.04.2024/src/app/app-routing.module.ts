import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'film/:imdbID', component: FilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
