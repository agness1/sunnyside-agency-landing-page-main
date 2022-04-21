const nav = document.querySelector(".menu-mobile")


const showMenu = () => {
 nav.classList.toggle("show")
   
}
const btn = document.querySelector(".hamburger").addEventListener('click', showMenu)