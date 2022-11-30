
let search = document.querySelector("#search");
let ressearch = document.querySelector(".searching");
let home = document.querySelector(".active");

let dialog = document.querySelector("#dialog-info");
let searchBookInput = document.getElementById('searchBook')

function hide(element) {
    element.style.display = "none"
}

// function hideHomePage() {
//     hide(search)
// }

home.addEventListener("click", function(){
    hide(search)
})
function show(element) {
    element.style.display = "block"
}
function showinput() {
    show(search)
}

ressearch.addEventListener("click", showinput)



let products = [
    { id: 1, name: 'គន្លឹះរៀនពូកែ', price: "$  5.00", img: 'static/imges/speaking.jpg', rate: 5 },

    { id: 2, name: "Charlotte's", price: "$  5.00", img: 'static/imges/charlott.jpg', rate: 5 },

    { id: 3, name: 'The Jungle book', price: "$  8.00", img: 'static/imges/JUNGLE.jpg', rate: 4 },

    { id: 4, name: 'JOHN GRISHAM', price: "$  30.00", img: 'static/imges/JOHN.jpg', rate: 3 },

    { id: 5, name: 'Nancy Drew', price: "$  22.00", img: 'static/imges/nANCY.JPG', rate: 5 },

    { id: 6, name: 'JUNGLE', price: "$  6.00", img: 'static/imges/jungle.webp', rate: 4 },

    { id: 7, name: 'JOHN GRISHAM', price: "$  5.00", img: 'static/imges/JOHN.jpg', rate: 5 },

    { id: 8, name: 'STORY BOOK', price: "$   10.22", img: 'static/imges/STORY%20BOOK.jpg', rate: 3 },

    { id: 9, name: 'ស្គាល់សេ្នហាទេ', price: "$  20.22", img: 'static/imges/knowlove.jpg', rate: 5 },

    { id: 10, name: 'គន្លឹះរៀនពូកែ', price: "$  19.00", img: 'static/imges/study.jpg', rate: 5 },

    { id: 11, name: 'លក់អារម្មណ៏', price: "$  5.50", img: 'static/imges/felling.jpg', rate: 5 },

    { id: 12, name: 'សារភាពស្នេហា', price: "$  33.00", img: 'static/imges/love.jpg', rate: 5 },
]


function displayProduct() {
    let contaner = document.querySelector(".container");
    // console.log( contaner);
    for (let pro of products) {
        let product = document.createElement("div");
        product.className = "product";


        let img = document.createElement("img");
        img.src = pro.img
        product.append(img);
        // console.log(img)

        let name = document.createElement("h4");
        name.textContent = pro.name;
        product.appendChild(name);

        let createSpan = document.createElement("span");
        createSpan.textContent = pro.price;
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

            // console.log(mianStar);
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
        ordericon.addEventListener("click", toCreat)
        materialOrder.appendChild(ordericon);


        product.appendChild(order)
        contaner.appendChild(product);
    }

    // console.log(contaner);

}
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

function toCreat(event){
    let nameProduct = document.querySelector("#name-Product");
    console.log("nameProduct");
    show(dialog)
}

let createBtn = document.querySelector("#create");
createBtn.addEventListener("click", function(){
    console.log("hi");
    hide(dialog);
})