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
    
    const testBook = new Book(title, description, author, year, numberOfPages, recommendedBy) 

    myLibrary.push(testBook)
}

addBookToLibrary("testBook", "Lorem ipsum", "Steve", "2000", "467", "Steve Jobs");
console.log(myLibrary)