// Get stored book information from session storage
let books = JSON.parse(sessionStorage.getItem("books")) || [];

// Add book to session storage
function addBook() {
  // Get form data
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let genre = document.getElementById("genre").value;
  let review = document.getElementById("review").value;

  // Create book object
  let book = {
    author: author,
    title: title,
    genre: genre,
    review: review,
  };

  // Add book to array
  books.push(book);

  // Store books in session storage
  sessionStorage.setItem("books", JSON.stringify(books));

  // Display books
  displayBooks();
}

// Remove book from session storage
function removeBook(index) {
  books.splice(index, 1);
  sessionStorage.setItem("books", JSON.stringify(books));
  displayBooks();
}

// Display books from session storage
function displayBooks() {
  let bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let book = books[i];

    // Create book list item
    let bookListItem = document.createElement("li");

    // Create book title element
    let bookTitle = document.createElement("h3");
    bookTitle.innerHTML = book.title;

    // Create book author element
    let bookAuthor = document.createElement("p");
    bookAuthor.innerHTML = "Author: " + book.author;

    // Create book genre element
    let bookGenre = document.createElement("p");
    bookGenre.innerHTML = "Genre: " + book.genre;

    // Create book review element
    let bookReview = document.createElement("p");
    bookReview.innerHTML = "Review: " + book.review;

    // Create remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", function () {
      removeBook(i);
    });

    // Add elements to book list item
    bookListItem.appendChild(bookTitle);
    bookListItem.appendChild(bookAuthor);
    bookListItem.appendChild(bookGenre);
    bookListItem.appendChild(bookReview);
    bookListItem.appendChild(removeButton);

    // Add book list item to book list
    bookList.appendChild(bookListItem);
  }
}
