import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';
import { AddBooksFacade } from './add-books.facade';
import { AddStorage } from './add.storage';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddBooksFacade, AddStorage],
})
export class AddComponent implements OnInit {
  searchTitle: string = '';
  searchError = false;
  selectedbook$: Observable<Book> | null = null;

  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  constructor(private facade: AddBooksFacade) {}

  ngOnInit() {
    this.facade.restore();
  }
  search() {
    if (!this.searchTitle) {
      this.searchError = true;
      return;
    }
    this.searchError = false;
    this.facade.addLastThreeSearch(this.searchTitle);
    this.fetchbook(this.searchTitle);
  }
  fetchbook(title: string) {
    this.selectedbook$ = this.facade.fetchBooks(title);
  }
}
