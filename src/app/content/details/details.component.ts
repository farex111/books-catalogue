import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { FireApiService } from 'src/app/services/fire-api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { body, MappedBooks } from '../models/content.model';
import { BooksApiService } from '../services/books.api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  storeData$: Observable<body | undefined> | undefined;
  BookData$: Observable<MappedBooks> | undefined;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private LoadingService: LoadingService,
    private FireApiService: FireApiService,
    private BooksApiService: BooksApiService
  ) {}

  private BooksDetails() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.LoadingService.start();
    this.storeData$ = this.FireApiService.getbook(id).pipe(
      tap((x) => {
        if (x) {
          this.BookData$ = this.BooksApiService.getnew(x.title).pipe(
            finalize(() => this.LoadingService.stop())
          );
        }
      })
    );
  }

  ngOnInit() {
    this.BooksDetails();
  }

  back() {
    this.Router.navigate(['content']);
  }
}
