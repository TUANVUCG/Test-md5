import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: Book = {};

  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.findById(id);
    });
  }

  ngOnInit() {
  }

  findById(id) {
    this.bookService.findById(id).subscribe(book => this.book = book);
  }

  deleteById(id) {
    this.bookService.delete(id).subscribe(() => {
        alert('Success');
      },
      () => {
        alert('Fail');
      });
  }

}
