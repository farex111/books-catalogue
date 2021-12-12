import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MappedBooks } from '../models/books.model';
import { AddBooksFacade } from './add-books.facade';
import { AddStorage } from './add.storage';
import { Rating } from '../models/content.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddBooksFacade, AddStorage],
})
export class AddComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  searchTitle: string = '';
  searchError = false;
  selectedbook$: Observable<MappedBooks> | null = null;
  submitted: boolean = false;


  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  constructor(private facade: AddBooksFacade, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.facade.restore();
  }
  private buildForm() {
    // this.form = new FormGroup({
    //   review: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(20),
    //   ]),
    //   rating: new FormControl(1)
    // });
    this.form = this.formBuilder.group({
      review:['', [
        Validators.required,
        Validators.minLength(20),
      ]],
      rating: 1
    })
  }

  get review(): FormControl {
    return this.form.get('review') as FormControl;
  }
  get retings(): number[] {
    return Rating;
  }
  save() {
    console.log(this.form.value);
    this.submitted = true;
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
