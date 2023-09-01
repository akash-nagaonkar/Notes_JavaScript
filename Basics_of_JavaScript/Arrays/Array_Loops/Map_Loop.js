// map loop

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const books = [
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publishYear: 1951,
    edition: "First Edition",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
    edition: "Paperback",
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
    edition: "Hardcover",
  },
  {
    title: "1984",
    genre: "Science Fiction",
    publishYear: 1949,
    edition: "Revised Edition",
  },
  {
    title: "Pride and Prejudice",
    genre: "Fiction",
    publishYear: 1813,
    edition: "Classic Edition",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishYear: 1937,
    edition: "Collector's Edition",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publishYear: 1997,
    edition: "Special Edition",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publishYear: 1954,
    edition: "Trilogy Edition",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
    publishYear: 1979,
    edition: "Ultimate Edition",
  },
  {
    title: "Brave New World",
    genre: "Science Fiction",
    publishYear: 1932,
    edition: "Modern Classic Edition",
  },
];

const numbers = myNums.map((num) => {
  return num + 10;
});
console.log(numbers); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const bookTitle = books.map((book) => {
  return book.title;
});
console.log(bookTitle);
/*
[
  'The Catcher in the Rye',
  'To Kill a Mockingbird',
  'The Great Gatsby',
  '1984',
  'Pride and Prejudice',
  'The Hobbit',
  "Harry Potter and the Sorcerer's Stone",
  'The Lord of the Rings',
  "The Hitchhiker's Guide to the Galaxy",
  'Brave New World'
]
*/

// Chainig with map()
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num <= 100);

console.log(newNums); // [11, 21, 31, 41, 51, 61, 71, 81, 91]