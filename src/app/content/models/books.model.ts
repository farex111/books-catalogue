export interface Book {
  volumeInfo: any;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishDate: string;
  description: string;
  averageRating: number;
  ratingsCount: number;
  imageLinks: {
    thumbnail: string;
    smallThumbnail: string;
  };
}
