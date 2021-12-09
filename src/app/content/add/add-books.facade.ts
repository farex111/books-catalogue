import { Injectable } from '@angular/core';
import { map, finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';
import { BooksApiService } from '../services/books.api.service';
import { AddStorage } from './add.storage';

@Injectable()
export class AddBooksFacade {

  get lastThreeSearches(): string[] {
    return this.addStorage.lastThreeSearches;
  }

  constructor(
    private booksApiService: BooksApiService,
    private LoadingService: LoadingService,
    private addStorage: AddStorage
  ) {}

  fetchBooks(title: string) {
    this.LoadingService.start();
    return this.booksApiService.getBooks(title).pipe(
      map((books) => books.items[0].volumeInfo),
      finalize(() => this.LoadingService.stop())
    );
  }
  restore() {
    this.addStorage.restore();
  }

  addLastThreeSearch(key: string) {
    this.addStorage.addToLastSearches(key);
  }
}
