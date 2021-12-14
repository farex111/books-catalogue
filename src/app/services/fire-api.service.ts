import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  body,
  BookListItem,
  BookWithId,
} from '../content/models/content.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}
  addBooks(body: body) {
    return from(this.store.collection('content').add(body));
  }
  getBooks(): Observable<BookWithId[]> {
    return this.store
      .collection<body>('content', (ref) =>
        ref.where('uid', '==', this.auth.userID)
      )
      .get()
      .pipe(
        map((res) =>
          res.docs.map<BookWithId>((d) => ({ ...d.data(), id: d.id }))
        )
      );
  }

  getbook(id: string): Observable<body | undefined> {
    return this.store
      .collection<body>('content', (ref) =>
        ref.where('uid', '==', this.auth.userID)
      )
      .doc(id)
      .get()
      .pipe(map((res) => res.data()));
  }
}
