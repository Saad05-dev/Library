const myLibrary = [];

//Creating a book
function Book(title,author,pages,read){

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
}
Book.prototype.info = function()
{
    const readStatus = this.read ? "read." : "not read yet.";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
}

//test Book constructor
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false);

console.log(theHobbit.info());

//Adding book to library
function addBookToLibrary(title,author,pages,read)
{
    myLibrary.push(new Book(title,author,pages,read));    
}

//test addBooktoLibrary function
addBookToLibrary('The Hobbit','J.R.R. Tolkien',295,false);
console.log("---");
console.log(myLibrary[0]); 
console.log(myLibrary[0].info());
addBookToLibrary('Dune', 'Frank Herbert', 412, true);
addBookToLibrary('A Wizard of Earthsea', 'Ursula K. Le Guin', 205, true);
addBookToLibrary('Foundation', 'Isaac Asimov', 255, false);

const bookContainer = document.getElementById('book-container');

//display books 
function displayBooks()
{
    bookContainer.innerHTML = ``;

    myLibrary.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('book-card');
            card.innerHTML = `
            <h3>${book.title}</h3>
            <p class="author">by ${book.author}</p>
            <p class="details">${book.pages} pages</p>
            <p class="details">Status: ${book.read ? 'Read' : 'Not Read Yet'}</p>
            `;
            card.setAttribute('data-id', book.id);
            bookContainer.appendChild(card);
    })  
}
displayBooks();

//Button for adding books 
const addNewBook = document.getElementById("new-book");

addNewBook.addEventListener("click",() => modal.showModal());

//From for adding books
const modal = document.getElementById("addBookModal");

const form = document.getElementById("book-form");

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title,author,pages,read);
    displayBooks();
    modal.close();
    form.reset();
});

//Button for closing form
const closeBtn = document.getElementById("close-modal");
closeBtn.addEventListener("click", () => modal.close());
