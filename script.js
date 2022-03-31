function myWork(){
	var entry = document.getElementById('CollectionSection')
	entry.classList.add('product')
	console.log(entry)
	var btnNext = document.createElement('button')
	btnNext.classList.add('nxt-btn')
	btnNext.innerText='Next'
	var btnPrev = document.createElement('button')
	btnPrev.classList.add('prev-btn')
	btnPrev.innerText='Prev'
	entry.prepend(btnNext)
	entry.prepend(btnPrev)
	
	var productContainer = document.querySelector('#CollectionSection .grid--collection')
	productContainer.classList.add('product-container')
	
	
	
	var productContainers = document.querySelector('.product-container');
	var nxtBtn = document.querySelector('.nxt-btn');
	var preBtn = document.querySelector('.prev-btn');
	
	var productCards = document.querySelectorAll('.product-container .grid__item')
	
	Array.from(productCards).forEach(function(item){
		item.classList.add('product-card')
	})
	
	console.log(productContainers)
	
	console.log(nxtBtn)
	console.log(preBtn)

	var containerDimensions = productContainers.getBoundingClientRect();
	console.log('diemntion', containerDimensions)
    var containerWidth = containerDimensions.width;

    nxtBtn.addEventListener('click', () => {
    	// console.log()
        productContainers.scrollLeft += containerWidth;
        console.log(productContainers.scrollLeft)
    })

    preBtn.addEventListener('click', () => {
        productContainers.scrollLeft -= containerWidth;
        console.log(productContainers.scrollLeft)
    })



}

var pollElement = function () {
	if (  document.getElementById('CollectionSection') ) {
		myWork()
	} else {
		setTimeout(function() {
			pollElement()
		}, 100);
	}
}

pollElement()