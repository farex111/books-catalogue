import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MappedBooks } from '../models/books.model';
import { AddBooksFacade } from './add-books.facade';
import { AddStorage } from './add.storage';
import { body, Rating, reset_form_key, status } from '../models/content.model';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddBooksFacade, AddStorage],
})
export class AddComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  searchTitle: string = '';
  searchError: boolean = false;
  selectedbook$: Observable<MappedBooks> | null = null;
  submitted: boolean = false;
  status = status;
  private unsubscribe$ = new Subject();

  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  constructor(
    private facade: AddBooksFacade,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private EventBus: EventBusService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.facade.restore();
    this.form
      .get('status')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => this.addControlByStatus(status));
    this.EventBus.on(reset_form_key)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.formReset());
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  private formReset() {
    this.form.reset();
    this.form.updateValueAndValidity();
    this.submitted = false;

    this.form.get('review')?.setValue('');
    this.form.get('rating')?.setValue(1);
    this.form.get('status')?.setValue('');
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      review: ['', [Validators.required, Validators.minLength(20)]],
      rating: 1,
      status: '',
    });
  }
  private addControlByStatus(status: status) {
    switch (status) {
      case this.status.readLater:
        this.form.addControl(
          'whenRead',
          new FormControl(null, Validators.required)
        );
        break;
      case this.status.read:
        this.form.removeControl('whenRead');
        break;
    }
  }

  get review(): FormControl {
    return this.form.get('review') as FormControl;
  }
  get retings(): number[] {
    return Rating;
  }
  get canReadLater(): boolean {
    return !!this.form.get('whenRead');
  }
  save(selectedbook: MappedBooks) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const value = this.form.value;

    const body: body = {
      title:selectedbook.title,
      uid: this.auth.userID,
      review: value.review,
      rating: value.rating,
      status: value.status,
      whenRead: value.whenRead || '',
    };
    this.facade.save(body);
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
