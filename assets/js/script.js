// navbar menu
const navbar = document.querySelector('.navbar');
const menu_btn = document.querySelector('#menu-btn');

menu_btn.onclick = function() {
    menu_btn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}