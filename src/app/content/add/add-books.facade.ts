import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BooksApiService } from '../services/books.api.service';

@Injectable()
export class AddBooksFacade {
  constructor(private booksApiService: BooksApiService) {}

  fetchBooks(title: string) {
    this.booksApiService
      .getBooks(title)
      .pipe(map((books) => books.items[0].volumeInfo)).subscribe(x => console.log(x))
  }
}
