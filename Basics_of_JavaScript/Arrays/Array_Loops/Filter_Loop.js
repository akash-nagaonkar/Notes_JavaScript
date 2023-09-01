// Filter loop
const codingLanguages = ["JavaScript", "Python", "Java", "C++"];

const values = codingLanguages.forEach((element) => {
  return element;
});

console.log(values); // undefined ---> forEach loop doesen't return any value, this is the problem with forEach loop

// filter() loop
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
  // When we are writing inside the scope({scope space}), we must use 'return' otherwise don't
  return num > 5; // condition for filtering the values
});
console.log(newNums); // [ 6, 7, 8, 9, 10 ]

// How could it be achieved by using forEach()?
const arrNums = [];
myNums.forEach((num) => {
  if (num > 5) {
    arrNums.push(num);
  } // condition for filtering the values
});
console.log(arrNums); // [ 6, 7, 8, 9, 10 ]

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

const userBooks = books.filter((book) => book.genre === "Science Fiction");

console.log(userBooks);
/* 
[
  {
    title: '1984',
    genre: 'Science Fiction',
    publishYear: 1949,
    edition: 'Revised Edition'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: 'Science Fiction',
    publishYear: 1979,
    edition: 'Ultimate Edition'
  },
  {
    title: 'Brave New World',
    genre: 'Science Fiction',
    publishYear: 1932,
    edition: 'Modern Classic Edition'
  }
]
*/

// Filter Two
const userBooks2 = books.filter((book) => {
  return book.publishYear >= 1930 && book.genre === "Fiction";
});

console.log(userBooks2);
/*
[
  {
    title: 'The Catcher in the Rye',
    genre: 'Fiction',
    publishYear: 1951,
    edition: 'First Edition'
  },
  {
    title: 'To Kill a Mockingbird',
    genre: 'Fiction',
    publishYear: 1960,
    edition: 'Paperback'
  }
]
*/
