// Hamburger menu uigeklapt

var Hamburgericon = document.querySelector('header nav img:first-of-type');
var Navigatie = document.querySelector('.UitklappenHamburgermenu');

function klapHamburgeruit() {
    Hamburgericon.classList.toggle('active');
    Navigatie.classList.toggle('active');
}

Hamburgericon.addEventListener('click', klapHamburgeruit);

//
