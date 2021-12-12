export interface Book {
  items: [
    {
      volumeInfo: {
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
      };
    }
  ];
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
