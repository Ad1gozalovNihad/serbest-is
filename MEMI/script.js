const CLOTHES_DATA = {
    women: [
        { id: "w1", name: "Zara Dress", price: 45, img: "images/zara.jpg" },
        { id: "w2", name: "H&M Blouse", price: 52, img: "images/hm.jpg" },
        { id: "w3", name: "Mango Skirt", price: 38, img: "images/mango.jpg" },
        { id: "w4", name: "Gucci Shirt", price: 67, img: "images/gucci.jpg" },
        { id: "w5", name: "Prada Coat", price: 55, img: "images/prada.jpg" },
        { id: "w6", name: "Versace Pants", price: 59, img: "images/versace.jpg" },
        { id: "w7", name: "Calvin Klein Top", price: 41, img: "images/calvinklein.jpg" },
        { id: "w8", name: "Chanel Jacket", price: 73, img: "images/chanel.jpg" }
    ],
    men: [
        { id: "m1", name: "Nike T-shirt", price: 49, img: "images/nike.jpg" },
        { id: "m2", name: "Adidas Sweatshirt", price: 60, img: "images/adidas.jpg" },
        { id: "m3", name: "Hugo Boss Shirt", price: 57, img: "images/hugoboss.jpg" },
        { id: "m4", name: "Levi's Jeans", price: 42, img: "images/levis.jpg" },
        { id: "m5", name: "Tommy Hilfiger Polo", price: 61, img: "images/tommy.jpg" },
        { id: "m6", name: "Lacoste Shorts", price: 55, img: "images/lacoste.jpg" },
        { id: "m7", name: "Puma Hoodie", price: 70, img: "images/puma.jpg" },
        { id: "m8", name: "Armani Jacket", price: 46, img: "images/armani.jpg" }
    ],
    children: [
        { id: "c1", name: "Gap Kids Dress", price: 31, img: "images/gapkids.jpg" },
        { id: "c2", name: "Carter's Set", price: 27, img: "images/carters.jpg" },
        { id: "c3", name: "Zara Kids T-shirt", price: 35, img: "images/zarakids.jpg" },
        { id: "c4", name: "H&M Kids Pants", price: 29, img: "images/hmkidspants.jpg" },
        { id: "c5", name: "Nike Kids Shorts", price: 33, img: "images/nikekids.jpg" },
        { id: "c6", name: "Adidas Kids Hoodie", price: 26, img: "images/adidaskids.jpg" },
        { id: "c7", name: "OshKosh B'gosh Overalls", price: 37, img: "images/oshkosh.jpg" },
        { id: "c8", name: "Mothercare Bodysuit", price: 32, img: "images/mothercare.jpg" }
    ]
};

const carousel = document.getElementById("carousel");
const carouselTitle = document.getElementById("carousel-title");
const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const modeToggle = document.getElementById("mode-toggle");
const aboutBtn = document.getElementById("about-btn");

let currentCategory = "women";
let cart = {};
