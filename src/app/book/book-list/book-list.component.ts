import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];


  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
    });
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    return this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }

}
