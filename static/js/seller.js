let products = [
    {id : 1 ,name: 'គន្លឹះរៀនពូកែ', price: "$  5.00", img: 'static/imges/speaking.jpg', rate: 4},
    
    {id : 2 ,name: "Charlotte's", price: "$  5.00", img: 'static/imges/charlott.jpg', rate: 5},
    
    {id : 3 ,name: 'The Jungle book', price: "$  8.00", img: 'static/imges/JUNGLE.jpg', rate: 3},
     
    {id : 4 ,name: 'JOHN GRISHAM', price: "$  30.00", img: 'static/imges/JOHN.jpg', rate: 3},
    
    {id : 5 ,name: 'Nancy Drew', price: "$  22.00", img: 'static/imges/nANCY.JPG', rate: 2},
    
    {id : 6 ,name: 'JUNGLE', price: "$  6.00", img: 'static/imges/jungle.webp', rate: 4},
    
    {id : 7 ,name: 'JOHN GRISHAM', price: "$  5.00", img: 'static/imges/JOHN.jpg', rate: 5},
    
    {id : 8 ,name: 'STORY BOOK', price: "$   10.22", img: 'static/imges/STORY%20BOOK.jpg', rate: 3},
     
    {id : 9 ,name: 'ស្គាល់សេ្នហាទេ', price: "$  20.22", img: 'static/imges/knowlove.jpg', rate: 5},
    
    {id : 10 ,name: 'គន្លឹះរៀនពូកែ', price: "$  19.00", img: 'static/imges/study.jpg', rate: 5},
    
    {id : 11 ,name: 'លក់អារម្មណ៏', price: "$  5.50", img: 'static/imges/felling.jpg', rate: 5},
    
    {id : 12 ,name: 'សារភាពស្នេហា', price: "$  33.00", img: 'static/imges/love.jpg', rate: 5},
]


// function -----------------

function hide(element){
    // todo 
}
function show(element){
    // todo 
    
}

function loadData(){
    // todo 
}

function saveData(){
    // todo 
}
function displayData(){




}
console.log(localStorage.getItem("hello"))




let containt5 = document.getElementById('contain5')
let form_field = document.getElementById('form-field')


const listthead = [
    { id: "ID", product: "BOOK", price: "PRICES", status: "DELETE" }
]

function table() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    for (let value of listthead) {
        let tr = document.createElement('tr')
        let th = document.createElement("th");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");

        th.textContent = value.id;
        th1.textContent = value.product;
        th2.textContent = value.price;
        th3.textContent = value.status;

        tr.appendChild(th)
        tr.appendChild(th1)
        tr.appendChild(th2)
        tr.appendChild(th3)
        thead.appendChild(tr)
        table.appendChild(thead)

    }

    for (let value of products) {
        let tr = document.createElement('tr')
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let i = document.createElement("i");

        i.className = "fa fa-fw fa-trash"
        i.classList.add("trash");
        td.textContent = value.id;
        td1.textContent = value.name;
        td2.textContent = value.price;
        
        td3.appendChild(i);
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        thead.appendChild(tr)
        table.appendChild(thead)
    }
    containt5.appendChild(table)
}
table()


function show(element){
    element.style.display = "block"
}
function hide(element){
    element.style.display = "none"
}

hide(form_field)

function onAddBook(){
    show(form_field)
}

buttonClick = document.getElementById("addBook")
buttonClick.addEventListener('click',onAddBook);
for (let book of buttonClick){
    if ("click"){
        table.push(buttonClick)
    }
}
console.log(table)


function onAddData(event){
    event.preventDefault()
    let object ={};
    show(form_field);
    product = document.getElementById("name").value;
    prices = document.getElementById("price").value;

    object.name = products
    object.price = prices
    products.push(object)
    console.log(products);
}
onAddData()
buttononAddData = document.getElementById("addData")
buttononAddData.addEventListener('click',onAddData);
