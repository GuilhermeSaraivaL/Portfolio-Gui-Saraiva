
let menuButton = document.getElementById('btn-abrir-menu-mobile');
let menu = document.getElementById('menu-mobile');
let closeButton = document.getElementById('btn-fechar-menu-mobile');
let overlay = document.getElementById('overlay-menu-mobile');

menuButton.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

closeButton.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})