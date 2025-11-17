const myLibrary = [];

function Book(title,author,pages,read){

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function()
    {
        const readStatus = this.read ? "read." : "not read yet.";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    }
}

//test Book constructor
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false);

console.log(theHobbit.info());

function addBookToLibrary(title,author,pages,read)
{
    myLibrary.push(new Book(title,author,pages,read));    
}
//test addBooktoLibrary function
addBookToLibrary('The Hobbit','J.R.R. Tolkien',295,false);
console.log("---");
console.log(myLibrary[0]); 
console.log(myLibrary[0].info());