// Hamburger menu uigeklapt

var Hamburgericon = document.querySelector('header nav img:first-of-type');
var Navigatie = document.querySelector('.UitklappenHamburgermenu');

function klapHamburgeruit() {
    Hamburgericon.classList.toggle('active');
    Navigatie.classList.toggle('active');
}

Hamburgericon.addEventListener('click', klapHamburgeruit);

// Filteren en sorteren tablet/desktop
// Sorteren

var ButtonAZ = document.querySelector('.filterensorterendesktop button:first-of-type');
var Formulier = document.querySelector('#Sorterenplaatsing');
var Pijltje = document.querySelector('.filterensorterendesktop img:nth-of-type(1)');
var Verhalen = document.querySelector('#articles');

function klapSorterenuit() {
    ButtonAZ.classList.toggle('active');
    Formulier.classList.toggle('active');
    Pijltje.classList.toggle('active');
    Verhalen.classList.toggle('active');
}

ButtonAZ.addEventListener('click', klapSorterenuit);

// Categorieën
//
//var  = document.querySelector('.filterensorterendesktop button:first-of-type');
//var Formulier = document.querySelector('#Sorterenplaatsing');
//var Pijltje = document.querySelector('.filterensorterendesktop img:nth-of-type(1)');
//var Verhalen = document.querySelector('#articles');
//
//function klapCategorieenuit() {
//    Buttoncategorie.classList.toggle('active');
//    Formulier.classList.toggle('active');
//    Pijltje.classList.toggle('active');
//    Verhalen.classList.toggle('active');
//}
//
//Buttoncategorie.addEventListener('click', klapCategorieenuit);
