import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book, MappedBooks } from '../models/books.model';

@Injectable()
export class BooksApiService {
  constructor(private http: HttpClient) {}
  getBooks(title: string) {
    return this.http.get<Book>(`${environment.booksAPI}?q=${title}`);
  }
  getnew(title: string) {
    return this.http
      .get<Book>(`${environment.booksAPI}?q=${title}`)
      .pipe(map<Book, MappedBooks>((books) => books.items[0].volumeInfo));
  }
}
