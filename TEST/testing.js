
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const date = document.getElementById('date');
const petSelect = document.getElementById('pet-select');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    ckeckInput();
});

function ckeckInput() {
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const priceValue = price.value.trim();
    const dateValue = date.value.trim();
    const petSelectValue = petSelect.value.trim();

    if(titleValue === '') {
        setErrorFor(title, 'le titre ne peu etre pas vide');
    }else{
        setSuccessFor(title)
    }

    if(authorValue === ''){
        setErrorFor(author, 'le nom d\'author ne peu etre pas vide');
    }else if(authorValue > 20){
        setErrorFor(author, 'le nom d\'author ne peu etre pas plus de 20 lettres');
    }else if(authorValue < "4"){
        setErrorFor(author, 'le nom d\'author ne peu etre pas moin de 4 lettre');
    }else{
        setSuccessFor(author);
    }
    


    if(priceValue === ''){
        setErrorFor(price, 'Ajouter le prix de livre');
    }else{
        setSuccessFor(price)
    }
    if(dateValue === ''){
        setErrorFor(date, 'Remplir la date de publication');
    }else{
        setSuccessFor(date)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}






function onFormSubmit() {
    
    var formElement = allElements();
    insertNewRecord(formElement);

}


function allElements() {
    var formElement = {};
    formElement["title"] = document.getElementById("title").value;
    formElement["author"] = document.getElementById("author").value;
    formElement["price"] = document.getElementById("price").value;
    formElement["date"] = document.getElementById("date").value;
    formElement["petSelect"] = document.getElementById("pet-select").value;
    return formElement;

}

function insertElement(data){
    var table = document.getElementById("table").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.petSelect; 
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button>Modifier</button> <button>Supprimer</button>`;        
}
