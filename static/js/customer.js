
let search = document.querySelector("#search");
let ressearch = document.querySelector(".searching");
let home = document.querySelector(".active");
let dialog = document.querySelector("#dialog-info");
let searchBookInput = document.getElementById('searchBook')


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




let products = [
    { id: 1, name: 'គន្លឹះរៀនពូកែ',price:5.25, img: 'static/img/speaking.jpg', rate: 5 },

    { id: 2, name: "Charlotte's", price:5.55 , img: 'static/img/charlott.jpg', rate: 5 },

    { id: 3, name: 'The Jungle book', price: 8.25, img: 'static/img/JUNGLE.jpg', rate: 4 },

    { id: 4, name: 'JOHN GRISHAM', price: 30.55, img: 'static/img/JOHN.jpg', rate: 3 },

    { id: 5, name: 'Nancy Drew', price: 22.77, img: 'static/img/nANCY.JPG', rate: 5 },

    { id: 6, name: 'JUNGLE', price: 6.99, img: 'static/img/jungle.webp', rate: 4 },

    { id: 7, name: 'JOHN GRISHAM', price: 5.44, img: 'static/img/JOHN.jpg', rate: 5 },

    { id: 8, name: 'STORY BOOK', price: 10.25, img: 'static/img/STORY%20BOOK.jpg', rate: 3 },

    { id: 9, name: 'ស្គាល់សេ្នហាទេ', price: 20.25, img: 'static/img/knowlove.jpg', rate: 5 },

    { id: 10, name: 'គន្លឹះរៀនពូកែ', price: 19.99, img: 'static/img/study.jpg', rate: 5 },

    { id: 11, name: 'លក់អារម្មណ៏', price: 5.55, img: 'static/img/felling.jpg', rate: 5 },

    { id: 12, name: 'សារភាពស្នេហា', price: 50.99, img: 'static/img/love.jpg', rate: 5 },
]

//display prodcuts

function displayProduct() {
    let container = document.querySelector(".container");
    for (let pro of products) {
        let product = document.createElement("div");
        product.className = "product";

        let img = document.createElement("img");
        img.src = pro.img
        product.append(img);

        let name = document.createElement("h4");
        name.textContent = pro.name;
        product.appendChild(name);

        let createSpan = document.createElement("span");
        createSpan.textContent = pro.price + " $ ";
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
displayProduct()

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
