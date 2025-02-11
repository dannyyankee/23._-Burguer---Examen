let orderimg = document.getElementById("orderimg");
let chat = document.getElementById("chat");
let chat_close = document.getElementById("chat_close");
let home_btn = document.getElementById("home_btn");
let chat_button = document.getElementById("chat_button");
let chat_input = document.getElementById("chat_input");
let chat_items = document.getElementById("chat_items");

// Menú hamburguesa
let nav_burguerbutton = document.getElementById("nav_burguerbutton");
let nav = document.getElementById("nav");

const mostrarMenu = () => {
    nav.style.display = "block"
    nav.classList.toggle("navAnimacion");
}
//funciona mostrar y quitar chat  
const hacerOrden = () => {
    chat.classList.add("chatanimacion")
}
const borrarChat = () => {
    chat.classList.remove("chatanimacion")
}

nav_burguerbutton.addEventListener("click", mostrarMenu)
orderimg.addEventListener("click", hacerOrden)
chat_close.addEventListener("click", borrarChat)
