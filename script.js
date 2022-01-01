console.log("this is video no 32")


// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
    console.log("hello");

}

// display constructor
function Display() {

}

// add Method to display prototype
Display.prototype.add = function (book) {
    console.log("adding to ui")
    tableBody = document.getElementById('tableBody')
    let uiString = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`
    tableBody.innerHTML += uiString;
}

// add Method to display prototype in clear
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
    
}

// add Method to display prototype in validation
Display.prototype.validation = function (book) {
    if (book.name < 2 || book.author < 2) {
        return false
    } else {
        return true;
    }
    
}

Display.prototype.show = function (type,dismessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message :-</strong> ${dismessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
    <span area-hidden = "true">&times;</span></button>
  </div>`
  setTimeout(function () {
    message.innerHTML = ''
}, 2000);
}


//  add  submit event listener to form 
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
    console.log("You have submit Libarariy form")
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }

    let book = new Book(name, author, type)
    console.log(book)

    let display = new Display();
    if (display.validation(book)) {
        display.add(book)
        display.clear();
        display.show("succes" ,"Your book is Succesfully add")
        
    }
    else{
        display.show("Error","Sorry You Can not add this Book")
    }

    e.preventDefault();
}