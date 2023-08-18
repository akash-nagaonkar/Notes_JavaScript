// Constructor function for creating Book objects
class Book {
    constructor(title, author, genre, yearPublished) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.yearPublished = yearPublished;
    }
  }
  
  // Creating instances of Book using the constructor
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 1925);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
  
  // Outputting the book details
  console.log(book1);
  console.log(book2);
  
  
  // Dsiplay books on the UI
  class Book {
    constructor(title, author, genre, yearPublished) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.yearPublished = yearPublished;
    }
  }
  
  const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 1925);
  const book4 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
  const book5 = new Book("Atomic Habits", "James Clare", "Self Improvement", 2011);
  
  const bookListElement = document.getElementById("bookList");
  
  function displayBook(book) {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Year Published:</strong> ${book.yearPublished}</p>
    `;
    bookListElement.appendChild(bookElement)
  }
  
  // Display the books on the UI
  displayBook(book3);
  displayBook(book4);
  displayBook(book5);
  