// // libraryBooks.forEach(book => {
// //     console.log(`Title: ${book.title}, Availability: ${book.available ? 'Available' : 'Not Available'}`);
// //   });

// //   //
// //   const availableBooks = libraryBooks.filter(book => book.available);
// // console.log(availableBooks);



// async function processData(dataArray) {
//   const result = await dataArray.reduce(async (accumulatorPromise, data) => {
//     const accumulator = await accumulatorPromise;
//     // Perform some asynchronous operation on data and accumulator
//     const processedData = await someAsyncFunction((data, accumulator) => {
//       data = data+accumulator;
//     });
//     return processedData;
//   }, Promise.resolve(initialValue));

//   return result;
// }

// // Usage:
// const myArray = [1, 2, 3, 4, 5];
// const initialValue = 0;
// processData(myArray).then((result) => {
//   console.log(result); // Final result after processing the array
// }).catch((error) => {
//   console.error(error);
// });



// // Create a Set to store unique book titles
// const bookTitles = new Set();

// // Create a Set to store unique book genres
// const bookGenres = new Set();

// // Create a Map to store books by author
// const booksByAuthor = new Map();

// // Function to add a book to the book management system
// function addBook(book) {
//   bookTitles.add(book.title);
//   bookGenres.add(book.genre);

//   if (booksByAuthor.has(book.author)) {
//     booksByAuthor.get(book.author).push(book);
//   } else {
//     booksByAuthor.set(book.author, [book]);
//   }
// }

// // Function to find books by a specific author
// function findBooksByAuthor(author) {
//   if (booksByAuthor.has(author)) {
//     return booksByAuthor.get(author);
//   } else {
//     return [];
//   }
// }

// // Usage:
// const book1 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   genre: "Classic"
// };

// const book2 = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   genre: "Classic"
// };

// const book3 = {
//   title: "The Catcher in the Rye",
//   author: "J.D. Salinger",
//   genre: "Coming-of-Age"
// };

// addBook(book1);
// addBook(book2);
// addBook(book3);

// console.log(bookTitles); // Set { 'The Great Gatsby', 'To Kill a Mockingbird', 'The Catcher in the Rye' }
// console.log(bookGenres); // Set { 'Classic', 'Coming-of-Age' }

// console.log(findBooksByAuthor("F. Scott Fitzgerald")); // [ { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' } ]
// console.log(findBooksByAuthor("Jane Austen")); // []


