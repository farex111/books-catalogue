import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../models/books.model';

@Injectable()
export class BooksApiService {
  constructor(private http: HttpClient) {}
  getBooks(title: string) {
    return this.http
      .get<{ items: Book[] }>(`${environment.booksAPI}?q=${title}`)
  }
}
