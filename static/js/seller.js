let containt5 = document.getElementById('contain5');
let form_field = document.getElementById('dialog-info');
let  create_Book = document.querySelector("#create");


// display dilog

function show(element){
    element.style.display = "block"
}

function onAddBook(){
    show(form_field);
}
//btnCencel
function hide(element){
    element.style.display = "none"
}

function cencelBook(){
    hide(form_field);
}

//data prodcut

let products = [
    {name: 'វិធីនិយាយ', price:5.25, img: 'img/speaking.jpg', rate: 4},
    
    {name: "Charlotte's", price:5.55, img: 'img/charlott.jpg', rate: 5},
    
    {name: 'The Jungle book', price:8.25, img: 'img/JUNGLE.jpg', rate: 3},
     
    {name: 'JOHN GRISHAM', price:30.55, img: 'img/JOHN.jpg', rate: 3},
    
    {name: 'Nancy Drew', price:22.77, img: 'img/nANCY.JPG', rate: 2},
    
    {name: 'JUNGLE', price:6.99, img: 'img/jungle.webp', rate: 4},
    
    {name: 'JOHN GRISHAM', price:5.44, img: 'img/JOHN.jpg', rate: 5},
    
    {name: 'STORY BOOK', price:10.25, img: 'img/STORY%20BOOK.jpg', rate: 3},
     
    {name: 'ស្គាល់សេ្នហាទេ', price:20.25, img: 'img/knowlove.jpg', rate: 5},
    
    {name: 'គន្លឹះរៀនពូកែ', price:19.99, img: 'img/study.jpg', rate: 5},
    
    {name: 'លក់អារម្មណ៏', price:5.55, img: 'img/felling.jpg', rate: 5},
    
    {name: 'សារភាពស្នេហា', price:50.09, img: 'img/love.jpg', rate: 5},
]

//create thead
const listthead = [
    {product: "BOOK", img:"IMAGE" ,price: "PRICES", status:"EDIT OR DELETE"}
]

//localstorage 
function saveBook(){
    localStorage.setItem("products",JSON.stringify(products))
}
function loadBook(){
    const storage = JSON.parse(localStorage.getItem("product"))
    if(storage.lenght > 0){
        products = storage 
    }
    else{
        localStorage.removeItem("product")
    }
}


///create tble 

function table() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    for (let value of listthead) {
        let tr = document.createElement('tr');
        let th = document.createElement("th");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");

        th.textContent = value.product;
        th1.textContent = value.img;
        th2.textContent = value.price ;
        th3.textContent = value.status;

        tr.appendChild(th);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        thead.appendChild(tr);
        table.appendChild(thead);
    }

    for (let value of products) {

        let tr = document.createElement('tr');
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        let li1 = document.createElement("i");
        li1.className = "fa fa-fw fa-trash";
        li1.classList.add("trash");

        let li2 = document.createElement("i");
        li2.className = "fa fa-fw fa-edit";
        li2.classList.add("edit");

        let img = document.createElement("img");
        img.className = "imgTable";
        img.src = value.img;
    

        td.textContent = value.name;
        td2.textContent = value.price + " $ ";

        td3.appendChild(li1)
        td3.appendChild(li2)
        td1.appendChild(img)

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2)
        tr.appendChild(td3);
        thead.appendChild(tr);
        table.appendChild(thead);
    }
    containt5.appendChild(table)
}
table()

/// appand create new prodcut
function toCreate (event){
    let priceForm = document.querySelector("#price").value;
    let imgForm = document.querySelector("#image").value;
    let proForm = document.querySelector("#name-Product").value;

    let newProdcut = {
        name:proForm,
        img : imgForm,
        price: priceForm,
    }

    products.push(newProdcut);
    hide(form_field);
    console.log(products);
    saveBook();
    table();

}
create_Book.addEventListener("click", toCreate)
