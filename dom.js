function myWork(){
	var colContent = document.querySelector('.col-content')
var productName = colContent.children[0]
var stockNumber = productName.children[1]
var productDesc = document.querySelector('.product-description')

var logo = document.querySelector('.logo-and-search .logo a img').src

console.log(logo)

var logoImg = document.createElement('img')
logoImg.src = logo
logoImg.style.height = '20px'

var productRating  = productDesc.querySelector('.product-rating')
console.log(productRating)
productRating.prepend(logoImg)

var ratingSummery = productRating.querySelector('.rating-summary')
var ratingSummaryLink = ratingSummery.querySelector('a')
var ratingHref = ratingSummaryLink.href
var numberOfReviews = ratingSummaryLink.children[0].innerText

var ratingAncor = document.createElement('a')
ratingAncor.href = ratingHref
ratingAncor.innerText = `(${numberOfReviews})`
ratingAncor.style.color = '#1b66e3'

ratingSummery.innerHTML = ''
ratingSummery.append(ratingAncor)

var productDescPara = productDesc.querySelector('.description').children
productDesc.prepend(productName)

var bulletPoints = document.querySelector('#product-info-panel .panel-body span').children[4]
bulletPoints.style.listStyle = 'unset'
bulletPoints.style.marginLeft = '16px'
console.log(bulletPoints)

Array.from(productDescPara).forEach(function(p, index){
	console.log(p)
	// if(!p.className=='lead'){
	// 	console.log(p)
	// 	p.classList.add('display-none')
	// }
	if(index != 0 ){
		p.classList.add('display-none')
	}
})
productDesc.append(bulletPoints)
productDesc.append(stockNumber)
console.log(productDescPara)

var tabContainer = document.querySelector('.product-further-info')
var tabElementContainer = document.createElement('div')
tabElementContainer.classList.add('tab-item-container')
tabElementContainer.innerHTML = `<div id="tab-description"><h2>Description</h2></div>
								<div id="tab-reviews"><h2>Reviews</h2></div>
								<div id="tab-qna"><h2>Product Q&A</h2></div>`
tabContainer.prepend(tabElementContainer)

var descriptionTab = document.querySelector('#description-spec')
var reviewTab = document.querySelector('#reviews')
var qnaTab = document.querySelector('#ask-and-answer')
// descriptionTab.classList.add('display-none')


var ctaDescription = document.querySelector('#tab-description')

ctaDescription.addEventListener('click', function(){
	descriptionTab.classList.add('display-block')
	descriptionTab.classList.remove('display-none')
	ctaDescription.classList.add('border-bottom')
	reviewTab.classList.add('display-none')
	qnaTab.classList.add('display-none')
	ctaReview.classList.remove('border-bottom')
	ctaQna.classList.remove('border-bottom')
})

var ctaReview = document.querySelector('#tab-reviews')
ctaReview.addEventListener('click', function(){
		reviewTab.classList.add('display-block')
		reviewTab.classList.remove('display-none')
		ctaReview.classList.add('border-bottom')
		descriptionTab.classList.add('display-none')
		qnaTab.classList.add('display-none')
		ctaDescription.classList.remove('border-bottom')
		ctaQna.classList.remove('border-bottom')
		var reviewTabBody = reviewTab.querySelector('#reviews-panel .panel-body')
		console.log(reviewTabBody)
		reviewTabBody.querySelector('.ratings-intro').classList.add('display-none')
		reviewTabBody.querySelector('.overall-ratings').classList.add('display-none')
		var reviewsSections = reviewTabBody.querySelectorAll('#reviews-panel .panel-body .reviewer')
		console.log('section',reviewsSections)
		
		Array.from(reviewsSections).forEach(function(reviewsSection, index){
			reviewsSection.classList.add('reviews-views')
			var hasReviewedBySpan = document.getElementById(`reviewed-span--000${index}`)
			console.log(hasReviewedBySpan)
			
			if(!hasReviewedBySpan){
				let reviewedBySpan = document.createElement('span')
				reviewedBySpan.innerText = 'Reviewed By'
				reviewedBySpan.style.marginRight = '10px'
				reviewedBySpan.id = `reviewed-span--000${index}`
				reviewsSection.prepend(reviewedBySpan)
				
				let dateOfComment = reviewTabBody.querySelector('#reviews-panel .panel-body .comments-ratings .details .heading').children[1]
				
				console.log('date', dateOfComment.innerHTML )
				dateOfComment.style.marginLeft= '6px'
				reviewsSection.innerHTML += dateOfComment.innerHTML
				
			}
		})

	
})

var ctaQna = document.querySelector('#tab-qna')

ctaQna.addEventListener('click', function(){
		qnaTab.classList.add('display-block')
		qnaTab.classList.remove('display-none')
		ctaQna.classList.add('border-bottom')
		descriptionTab.classList.add('display-none')
		reviewTab.classList.add('display-none')
		ctaDescription.classList.remove('border-bottom')
		ctaReview.classList.remove('border-bottom')
})

ctaDescription.classList.add('border-bottom')
reviewTab.classList.add('display-none')
qnaTab.classList.add('display-none')

descriptionTab.children[1].classList.add('display-none')
reviewTab.children[1].classList.add('display-none')
qnaTab.children[1].classList.add('display-none')

var allBasket = document.querySelector('#all-basket .add-item')
// allBasket.children
console.log('allbasket', allBasket)

var priceLarge = allBasket.children[0]
allBasket.style.backgroundColor = '#fff'
console.log('price-large', priceLarge )

var discount = allBasket.children[1]
discount.innerText = 'Pack of 6'
var quantityInput = allBasket.children[2].querySelector('.easy-number-wrapper #quantity')
console.log('quantityInput', quantityInput)
priceLarge.prepend(quantityInput)
priceLarge.append(discount)
var qty = document.createElement('span')
qty.innerText = 'QTY'
qty.style.fontSize = '16px'
qty.style.fontWeight = 'normal'
priceLarge.prepend(qty)

document.querySelector('.easy-number-wrapper').style.display = 'none'

var eLogistic = document.querySelector('.e-logistics').children[1]
eLogistic.classList.add('elogistic')
console.log(eLogistic)
document.querySelector('#all-basket').append(eLogistic)
document.querySelector('.basket-related-appends').classList.add('display-none')

var caroselContainer = document.querySelector('.product-basic-info .product-images').classList.add('carosel-container')
								
}


var pollElement = function () {
	if (  document.getElementById('product-info-panel') ) {
		myWork()
	} else {
		setTimeout(function() {
			pollElement()
		}, 100);
	}
}

pollElement()
