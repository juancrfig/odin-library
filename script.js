const myLibrary = [];

function Book(
    title, 
    description, 
    author, 
    year, 
    numberOfPages,
    recommendedBy
) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.year = year;
    this.numberOfPages = numberOfPages;
    this.recommendedBy = recommendedBy;
}

function addBookToLibrary(title, description, author, year, numberOfPages, recommendedBy) {
    const testBook = new Book(title, description, author, year, numberOfPages, recommendedBy);
    myLibrary.push(testBook);
}

// Adding 5 famous books to the library
addBookToLibrary(
    "To Kill a Mockingbird",
    "A novel about the serious issues of rape and racial inequality, told through the eyes of a young girl.",
    "Harper Lee",
    1960,
    281,
    "Oprah Winfrey"
);

addBookToLibrary(
    "1984",
    "A dystopian novel set in a totalitarian society ruled by the Party, which has total control over every aspect of people's lives.",
    "George Orwell",
    1949,
    328,
    "Barack Obama"
);

addBookToLibrary(
    "The Great Gatsby",
    "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    "F. Scott Fitzgerald",
    1925,
    180,
    "Bill Gates"
);

addBookToLibrary(
    "Pride and Prejudice",
    "A romantic novel of manners that explores the issues of marriage, morality, and misconceptions.",
    "Jane Austen",
    1813,
    279,
    "Emma Watson"
);

addBookToLibrary(
    "The Catcher in the Rye",
    "A story about a teenager's struggles with identity, belonging, and alienation.",
    "J.D. Salinger",
    1951,
    277,
    "John Green"
);

const libraryElm = document.querySelector('#library-container');

// Log the library to see the added books
function renderBooks() {

    libraryElm.innerHTML = '';

    myLibrary.forEach(book => {
        // Create a container for each book
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-card');
        bookContainer.setAttribute('data-index', myLibrary.indexOf(book))
    
        // Add the book's information to the container
        bookContainer.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Pages:</strong> ${book.numberOfPages}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <p><strong>Recommended by:</strong> ${book.recommendedBy}</p>
            <button>Delete</button>
        `;
    
        // Append the book container to the body (or a specific element)
        libraryElm.appendChild(bookContainer);
    });   

    addEventDeleteButtons();
}

renderBooks()

function addEventDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.book-card button');

    deleteButtons.forEach( button => {
        button.addEventListener('click', () => {
            console.log(`Deleting book with index ${button.parentElement.dataset.index}`)
            deleteBook(button.parentElement.dataset.index);
        })
    })

}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}



// Show/hide the form
document.getElementById('add-book-btn').addEventListener('click', () => {
    document.getElementById('add-book-form').style.display = 'block';
});

// Cancel button to hide the form
document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('add-book-form').style.display = 'none';
});

// Handle form submission
document.getElementById('add-book-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const pages = document.getElementById('pages').value;
    const recommended = document.getElementById('recommended').value;

    // Add the new book to the library
    addBookToLibrary(title, description, author, year, pages, recommended);
    renderBooks();
    // Clear the form and hide it
    document.getElementById('add-book-form').reset();
    document.getElementById('add-book-form').style.display = 'none';
});

console.log(myLibrary)