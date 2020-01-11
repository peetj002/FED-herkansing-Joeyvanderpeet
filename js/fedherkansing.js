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

var ButtonAZ = document.querySelector('.filterensorterendesktop button:nth-of-type(1)');
var FormulierAZ = document.querySelector('#Sorterenplaatsing');
var PijltjeAZ = document.querySelector('.filterensorterendesktop button:nth-of-type(1) img');
var Verhalen = document.querySelector('#articles');

function klapSorterenuit() {
    ButtonAZ.classList.toggle('active');
    FormulierAZ.classList.toggle('active');
    PijltjeAZ.classList.toggle('active');
    Verhalen.classList.toggle('active');
    klapCategoriein();
}

function klapAZin() {
    ButtonAZ.classList.remove('active');
    FormulierAZ.classList.remove('active');
    PijltjeAZ.classList.remove('active');
    Verhalen.classList.remove('active');
}

ButtonAZ.addEventListener('click', klapSorterenuit);

// Categorieën

var Buttoncategorie = document.querySelector('.filterensorterendesktop button:nth-of-type(2)');
var Formuliercategorie = document.querySelector('#Categorieenplaatsing');
var Pijltjecategorie = document.querySelector('.filterensorterendesktop button:nth-of-type(2) img');
var Verhalen = document.querySelector('#articles');

function klapCategorieuit() {
    Buttoncategorie.classList.toggle('active');
    Formuliercategorie.classList.toggle('active');
    Pijltjecategorie.classList.toggle('active');
    Verhalen.classList.toggle('active');
    klapAZin();
}

Buttoncategorie.addEventListener('click', klapCategorieuit);

function klapCategoriein() {
    Buttoncategorie.classList.remove('active');
    Formuliercategorie.classList.remove('active');
    Pijltjecategorie.classList.remove('active');
    Verhalen.classList.remove('active');
}


// Vertelperspectief uitklappen
