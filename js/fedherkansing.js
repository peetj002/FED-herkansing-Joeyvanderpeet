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
    klapPerspectiefin();
    klapTaalgebruikin();
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
    klapPerspectiefin();
    klapTaalgebruikin();
}

function klapCategoriein() {
    Buttoncategorie.classList.remove('active');
    Formuliercategorie.classList.remove('active');
    Pijltjecategorie.classList.remove('active');
    Verhalen.classList.remove('active');
}

Buttoncategorie.addEventListener('click', klapCategorieuit);

// Vertelperspectief uitklappen

var Buttonperspectief = document.querySelector('.filterensorterendesktop button:nth-of-type(3)');
var Formulierperspectief = document.querySelector('.sortformstyling:nth-of-type(3)');
var Pijltjeperspectief = document.querySelector('.filterensorterendesktop button:nth-of-type(3) img');
var Verhalen = document.querySelector('#articles');

function klapPerspectiefuit() {
    Buttonperspectief.classList.toggle('active');
    Formulierperspectief.classList.toggle('active');
    Pijltjeperspectief.classList.toggle('active');
    Verhalen.classList.toggle('active');
    klapAZin();
    klapCategoriein();
    klapTaalgebruikin();
}

function klapPerspectiefin() {
    Buttonperspectief.classList.remove('active');
    Formulierperspectief.classList.remove('active');
    Pijltjeperspectief.classList.remove('active');
    Verhalen.classList.remove('active');
}

Buttonperspectief.addEventListener('click', klapPerspectiefuit);

// Taalgebruikfilter

var Buttontaalgebruik = document.querySelector('.filterensorterendesktop button:nth-of-type(4)');
var Formuliertaalgebruik = document.querySelector('.sortformstyling:nth-of-type(4)');
var Pijltjetaalgebruik = document.querySelector('.filterensorterendesktop button:nth-of-type(4) img');
var Verhalen = document.querySelector('#articles');

function klapTaalgebruikuit() {
    Buttontaalgebruik.classList.toggle('active');
    Formuliertaalgebruik.classList.toggle('active');
    Pijltjetaalgebruik.classList.toggle('active');
    Verhalen.classList.toggle('active');
    klapAZin();
    klapCategoriein();
    klapPerspectiefin();
}

Buttontaalgebruik.addEventListener('click', klapTaalgebruikuit);


function klapTaalgebruikin() {
    Buttontaalgebruik.classList.remove('active');
    Formuliertaalgebruik.classList.remove('active');
    Pijltjetaalgebruik.classList.remove('active');
    Verhalen.classList.remove('active');
}
