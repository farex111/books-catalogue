import { Injectable } from '@angular/core';
import { map, finalize } from 'rxjs/operators';
import { EventBusService } from 'src/app/services/event-bus.service';
import { FireApiService } from 'src/app/services/fire-api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Book, MappedBooks } from '../models/books.model';
import { body, reset_form_key } from '../models/content.model';
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
    private addStorage: AddStorage,
    private fireApiService: FireApiService,
    private EventBus: EventBusService
  ) {}

  fetchBooks(title: string) {
    this.LoadingService.start();
    return this.booksApiService.getBooks(title).pipe(
      map<Book, MappedBooks>((books) => books.items[0].volumeInfo),
      finalize(() => {
        this.LoadingService.stop(), this.EventBus.emit(reset_form_key);
      })
    );
  }
  save(body: body) {
    this.fireApiService.addBooks(body).subscribe((x) => console.log(x));
  }
  restore() {
    this.addStorage.restore();
  }

  addLastThreeSearch(key: string) {
    this.addStorage.addToLastSearches(key);
  }
}
