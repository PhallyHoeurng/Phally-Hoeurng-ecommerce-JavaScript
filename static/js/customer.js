let search = document.querySelector("#search");
let ressearch = document.querySelector(".searching");
let home = document.querySelector(".active");
let dialog = document.querySelector("#dialog-info");
let searchBookInput = document.getElementById('searchBook')
let cancel = document.querySelector("#cancel");


let products = [];

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
//display prodcuts
function displayProduct() {
    let container = document.querySelector(".container");
    for (let pro of products) {
        let product = document.createElement("div");
        product.className = "product";

        let img = document.createElement("img");
        img.src= pro.img
        img.addEventListener("click",detailProduct)
        product.append(img);

        let name = document.createElement("h4");
        name.textContent = pro.name;
        product.appendChild(name);

        let createSpan = document.createElement("span");
        createSpan.textContent = "Price " + pro.price + " $ ";
        product.appendChild(createSpan);

        let mianStar = document.createElement("div");
        mianStar.className = "main-star"

        let star = document.createElement("div");
        star.className = "star-first";
        mianStar.appendChild(star);


        for (let i = 0; i < pro.rate; i++) {

            let idd = document.createElement("i");
            idd.className = "material-icons";
            idd.classList.add("star");
            idd.textContent = "star"
            mianStar.appendChild(idd);
            product.appendChild(mianStar);
        }

        let order = document.createElement("div");
        order.className = "delivery";

        let materialOrder = document.createElement("div");
        materialOrder.className = "material-icons";
        order.appendChild(materialOrder)

        let ordericon = document.createElement("i");
        ordericon.className = "order";
        ordericon.textContent = "local_grocery_store"
        ordericon.style.cursor = "pointer";
        ordericon.addEventListener("click", byThebook)
        materialOrder.appendChild(ordericon);

        product.appendChild(order)
        container.appendChild(product);
    }
}

///search books

function searchBook(event) {
    let inputText = searchBookInput.value.toLowerCase();
    let productLists = document.getElementsByClassName('product')
    console.log(inputText)
    for (let value of productLists) {
        let bookTitle = value.childNodes[1].textContent;

        let displayStyle = "";
        if (bookTitle.toLocaleLowerCase().indexOf(inputText) == -1) {
            displayStyle = "none";
        } else {
            displayStyle = "block";
        }
        value.style.display = displayStyle;
    }
}
searchBookInput.addEventListener("keyup", searchBook);

//aleart dialog by book
function byThebook(event){
    let nameProduct = document.querySelector("#name-Product");
    show(dialog)
}

let createBtn = document.querySelector("#create");
    createBtn.addEventListener("click", function(){
    console.log("by this book");
    hide(dialog);
})

//hide input
function hide(element) {
    element.style.display = "none"
}

home.addEventListener("click", function(){
    hide(search)
})

//show input
function show(element) {
    element.style.display = "block"
}
function showinput() {
    show(search)
}
ressearch.addEventListener("click", showinput)

//hidebtn Cancel
function hidebtnCeancel(){
    hide(dialog)

}
cancel.addEventListener("click", hidebtnCeancel)

// alert detail book 
function detailProduct(){
    window.alert("Welcome! The book is so good for reader make you improve your knowlede. The book is have a lot of idear to share all of you.  ")
}

loadBook();
displayProduct()