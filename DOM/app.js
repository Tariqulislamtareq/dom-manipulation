

const data = [
    {title: 'image 1', img: 'https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80' },
    {title: 'image 2', img: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {title: 'image 2', img: 'https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=80'}
]

const main = document.getElementById('main')
console.log(main)
main.innerHTML =`<div id="carousel" class="carousel"></div>`

var imageTags = []

const carusel = document.getElementById('carousel')
data.forEach(function(item, index){
    if(index === 0){
        imageTags.push(`<div class="carousel__item carousel__item--visible" id="index--${index}"><img src="${item.img}"/></div>`)
    }else{
        imageTags.push(`<div class="carousel__item" id="index--${index}"><img src="${item.img}"/></div>`)
    }
    
})

const controls = [
                    `<button id="carousel__button--prev">Previous</button>`,
                    `<button id="carousel__button--next">Next</button>`
                ]
const controlsDiv = `<div class="carousel__actions">${controls.join('\n')}</div>`

imageTags.push(controlsDiv)
carusel.innerHTML = imageTags.join('\n')


// business logic

let slidePosition = 0
const slides = document.getElementsByClassName('carousel__item')
const totalSlides = slides.length

document
    .getElementById('carousel__button--next')
    .addEventListener('click', function(){
        moveToNextSlide();
    });

document
    .getElementById('carousel__button--prev')
    .addEventListener('click', function(){
        moveToPrevSlide();
    });

function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible')
        slide.classList.add('carousel__item--hidden')
    }
    slides[slidePosition].classList.add('carousel__item--visible')
}

function moveToNextSlide(){
    if(slidePosition === totalSlides -1){
        slidePosition = 0;
    }else{
        slidePosition ++
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    if(slidePosition === 0){
        slidePosition = totalSlides -1;
    }else{
        slidePosition --;
    }
    updateSlidePosition();
}



// var myWork = function () {
// 	var mycontainer = window.jQuery("#shopify-section-global-newsletter");

// 	$( mycontainer ).append('Hi bocakchoda')
// }

// var pollElement = function () {
// 	if ( window.jQuery && window.jQuery("#shopify-section-global-newsletter").length ) {
// 		myWork()
// 	} else {
// 		setTimeout(function() {
// 			pollElement()
// 		}, 100);
// 	}
// }

// pollElement()





