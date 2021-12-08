import { Component, OnInit } from '@angular/core';
import { AddBooksFacade } from './add-books.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddBooksFacade],
})
export class AddComponent implements OnInit {
  lastThreeSearch = ['Green Mile', 'Godfather', 'Shuter Island'];
  searchTitle: string = '';
  searchError = false;

  constructor(private facade: AddBooksFacade) {}

  ngOnInit() {}
  search() {
    if (!this.searchTitle) {
      this.searchError = true;
      return;
    }
    this.searchError = false;
    this.facade.fetchBooks(this.searchTitle)
  }
}
