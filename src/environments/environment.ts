// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  booksAPI: 'https://www.googleapis.com/books/v1/volumes',
  movieAPI: 'https://www.omdbapi.com/?apikey=26d0b19a',
  firebase: {
    projectId: 'books-3cc30',
    appId: '1:744053503721:web:7b5057f9b6604f3926e278',
    storageBucket: 'books-3cc30.appspot.com',
    apiKey: 'AIzaSyCvRr7lNvWEWmQ9qg65FJm9FHw9gQUHQT0',
    authDomain: 'books-3cc30.firebaseapp.com',
    messagingSenderId: '744053503721',
    measurementId: 'G-RXV5HRS1YJ',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
