const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Sélectionner les éléments HTML pertinents
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const banner = document.getElementById("banner");
const bannerImg = document.getElementById("banner-img");
const bannerDescription = document.getElementById("paragraph");

// Ajouter un événement de click à la flèche gauche
leftArrow.addEventListener("click", function (event) {
	currentSlideIndex = (currentSlideIndex + slides.length - 1) % slides.length; // Défilement infini grace au modulo
	updateBanner()
});
  
// Ajouter un événement de click à la flèche droite
rightArrow.addEventListener("click", function (event) {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Défilement infini grace au modulo
	updateBanner()
});

// Initialiser l'index de la diapositive actuelle à 0
let currentSlideIndex = 0;

// Fonction qui met à jour l'image et la description en fonction de l'index de la diapositive
function updateBanner() {
	const currentSlide = slides[currentSlideIndex];
	bannerImg.src = "./assets/images/slideshow/" + currentSlide.image;
	bannerDescription.innerHTML = currentSlide.tagLine;
	updateDots()
}

// Fonction qui met à jour les points de la bannière en fonction de l'index de la diapositive
function updateDots() {
const dotElements = banner.querySelectorAll(".dot");
	for (let i = 0; i < dotElements.length; i++) {
	  if (i == currentSlideIndex) {
		dotElements[i].classList.add("dot_selected");
	  } 
	  else {
		dotElements[i].classList.remove("dot_selected");
	  }
	}
}

function renderDot() {
	let html = ""
	for (let i = 0; i < slides.length; i++) {
		if (i == currentSlideIndex) {
			html += '<div class="dot dot_selected"></div>' 
		} else {
			html += '<div class="dot"></div>' 
		}
	}
	document.getElementById ("dots").innerHTML=html
}
renderDot ()