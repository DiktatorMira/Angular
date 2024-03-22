import { Component, OnInit } from '@angular/core';
import { BookService } from './comp2.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  books: any[] = [];
  selectedBook: any;
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      console.log(data);
    });
  }
  onSelectBook(book: any): void {
    this.selectedBook = book;
  }
}