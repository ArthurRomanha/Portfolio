 const menuHamburguer = document.querySelector(".menu-hamburguer");

const navList = document.querySelector(".nav-list");
 let menuHamburguerAtivo = false;

 menuHamburguer.addEventListener("click", () => {
    if(!menuHamburguerAtivo){
        menuHamburguer.classList.add("active");
        navList.classList.add("active");
        menuHamburguerAtivo = true;

    }else{
        menuHamburguer.classList.remove("active");
        navList.classList.remove("active");
        menuHamburguerAtivo = false;
    }
 })