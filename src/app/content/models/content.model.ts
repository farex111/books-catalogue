
export const Rating = [1, 2, 3, 4, 5];

export enum status {
  read = 'read',
  readLater = 'readLater',
}
export type BookWithId = body & { id: string };

export interface body {
  title: string;
  uid: string | null | undefined;
  review: string;
  rating: number;
  status: status;
  whenRead: string;
}
export interface MappedBooks {
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  imageLinks: {
    thumbnail: string;
  };
}
export interface BookListItem {
  data: BookWithId;
  book: MappedBooks;
}

export const reset_form_key = 'Reset-form';