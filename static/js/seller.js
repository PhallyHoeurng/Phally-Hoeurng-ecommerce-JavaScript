let form_field = document.getElementById('dialog-info');
const  containt5 = document.querySelector("#contain5");
let  create_Book = document.querySelector("#create");
create_Book.addEventListener("click", toCreate)

//data prodcut
let products = [
    {name: 'វិធីនិយាយ', price:5.25, img: 'static/img/speaking.jpg', rate: 4},
    
    {name: "Charlotte's", price:5.55, img: 'static/img/charlott.jpg', rate: 5},
    
    {name: 'The Jungle book', price:8.25, img: 'static/img/JUNGLE.jpg', rate: 3},
     
    {name: 'JOHN GRISHAM', price:30.55, img: 'static/img/JOHN.jpg', rate: 3},
    
    {name: 'Nancy Drew', price:22.77, img: 'static/img/nANCY.JPG', rate: 2},
    
    {name: 'JUNGLE', price:6.99, img: 'static/img/jungle.webp', rate: 4},
    
    {name: 'JOHN GRISHAM', price:5.44, img: 'static/img/JOHN.jpg', rate: 5},
    
    {name: 'STORY BOOK', price:10.25, img: 'static/img/STORY%20BOOK.jpg', rate: 3},
     
    {name: 'ស្គាល់សេ្នហាទេ', price:20.25, img: 'static/img/knowlove.jpg', rate: 5},
    
    {name: 'គន្លឹះរៀនពូកែ', price:19.99, img: 'static/img/study.jpg', rate: 5},
    
    {name: 'លក់អារម្មណ៏', price:150.55, img: 'static/img/felling.jpg', rate: 5},

    {name: 'PRAYER BOOK', price:10.09, img: 'static/img/prayer book.jpg', rate: 5},

    {name: 'មច្ចាទិដ្ឋិកថា', price:30.89, img: 'static/img/bodi.jpg', rate: 5},

    {name: 'GOD', price:19.29, img: 'static/img/God.jpg', rate: 3},

    {name: 'សារភាពស្នេហ៍', price:100.29, img: 'static/img/love.jpg', rate: 4},

    {name: 'WILD FLOWERS', price:10.29, img: 'static/img/the oxford.jpg', rate: 3},

    {name: 'UNCLE WIGGLLY', price:100.29, img: 'static/img/UNCLE.JPG', rate: 2},
    
]

//create thead
const listthead = [
    {product: "BOOK", img:"IMAGE" ,price: "PRICES", status:"EDIT OR DELETE"}
]

//localstorage 
function saveBook(){
    localStorage.setItem("products",JSON.stringify(products));
}
function loadBook(){
    const storage = JSON.parse(localStorage.getItem("products"));
    if(storage !== null){
        products = storage 
    }else  {
        localStorage.removeItem(products);
    }
}

///create tble 
function createtable() {
    table = document.querySelector('table');
    table.remove();
    table = document.createElement('table');

    thead = document.createElement('thead');

    containt5.appendChild(table);

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
        console.log(thead)
    }

    for (let index = 0 ; index < products.length; index++) {
        product = products[index];
        let tr = document.createElement('tr');
        tr.dataset.index=index;
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        let li1 = document.createElement("i");
        li1.className = "fa fa-fw fa-trash";
        li1.classList.add("trash");
        li1.addEventListener("click",deleteProduct);
        let li2 = document.createElement("i");
        li2.className = "fa fa-fw fa-edit";
        li2.classList.add("edit");
        li2.addEventListener("click", editProduct)

        let img = document.createElement("img");
        img.className = "imgTable";
        img.src = product.img;
    
        td.textContent = product.name;
        td2.textContent = product.price + " $ ";

        td3.appendChild(li1)
        td3.appendChild(li2)
        td1.appendChild(img)

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2)
        tr.appendChild(td3);

        thead.appendChild(tr);
        table.appendChild(thead);
        console.log(table)
    }
    containt5.appendChild(table)
}

function clearDialogPoduct(){
    
    document.querySelector("#name-Product").value= ""
    document.querySelector("#price").value =""
    document.querySelector("#image").value=""

}

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
    // products.push(newProdcut);
    products.splice(lengthPro,0,newProdcut)
    hide(form_field);
    saveBook();
    createtable(); 
    clearDialogPoduct()

}
createtable();

// display dilog
function show(element){
    element.style.display = "block"
}

function onAddBook(){
    clearDialogPoduct()
    show(form_field);
    let index = event.target.parentElement.parentElement.dataset.index;
    lengthPro=index
}
//btnCencel
function hide(element){
    element.style.display = "none"
}
function cencelBook(){
    hide(form_field);
}

function deleteProduct (event){
    event.preventDefault();
    let index = event.target.parentElement.parentElement.dataset.index;
    products.splice(index,1)
    saveBook();
    createtable();
}


let lengthPro = products.length;
function editProduct(event){
    document.querySelector("menu").lastElementChild.textContent="Edit";
    let index = event.target.parentElement.parentElement.dataset.index;

    let prodcut=products[index];
    document.querySelector("#name-Product").value=prodcut.name;
    document.querySelector("#price").value=prodcut.price
    document.querySelector("#image").value=prodcut.img
    lengthPro=index
    show(form_field)
    products.splice(index,1)

}

loadBook();  //
// saveBook();   // save
createtable();
