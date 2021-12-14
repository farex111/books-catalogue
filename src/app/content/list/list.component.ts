import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { FireApiService } from 'src/app/services/fire-api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Book, MappedBooks } from '../models/books.model';
import { BookListItem, BookWithId } from '../models/content.model';
import { BooksApiService } from '../services/books.api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  books$: Observable<BookListItem[]> | undefined;

  constructor(
    private FireApiService: FireApiService,
    private BooksApiService: BooksApiService,
    private LoadingService: LoadingService
  ) {}

  private mapBookData(data: BookWithId[]) {
    return data.map((d) =>
      this.BooksApiService.getBooks(d.title).pipe(
        map<Book, MappedBooks>((books) => books.items[0].volumeInfo),
        map<MappedBooks, BookListItem>((book) => ({
          book,
          data: d,
        }))
      )
    );
  }

  ngOnInit() {
    this.LoadingService.start();
    this.books$ = this.FireApiService.getBooks().pipe(
      switchMap((data) => forkJoin(this.mapBookData(data))),
      finalize(() => this.LoadingService.stop())
    );
  }
}
