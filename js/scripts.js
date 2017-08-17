$(document).ready(function() {
	// init
	mmenuMobile();
	new WOW().init();
	$("img.lazy").lazyload({
        effect : "fadeIn"
    });

    // function
    backToTop();
    sectionTrade();
    sectionSlider();

    if($('#tabp_1 .owl-carousel').length)
    	slideFeature();

    if($('#tabp_2 .owl-carousel').length)
    	slideBestSell();

    if($('#tabp_3 .owl-carousel').length)
    	slidePopular();

    if($('.example-bootstrap').length)
    	ratingEnable();
});

function mmenuMobile() {
	$('nav#menu').mmenu({
		extensions				: [ 'effect-slide-menu', 'shadow-page'],
		keyboardNavigation 		: false,
		screenReader 			: false,
		counters				: true,
		navbar 		: {
						title		: 'PROJECT TEST'
		},

		navbars		: [
			{
				position	: 'bottom',
				content		: [
					'<a href="https://www.emthemes.com/" target="_blank">Emthemes.com</a>'
				]
			}
		]			
		
	});
}

function backToTop() {
	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                // $('#back-to-top').addClass('show');
	                $('#back-to-top').fadeIn();
	            } else {
	                $('#back-to-top').fadeOut();
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
}

function sectionTrade() {
	var owl = $('section.trade .owl-carousel');
    owl.owlCarousel({
    	responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 2,
		    },
		    // breakpoint from 480 up
		    480 : {
		    	items: 3,
		    },
		    // breakpoint from 768 up
		    768 : {
		     	items: 4,
		    },
		    992 : {
		    	items: 5,
		    }
		},
		margin: 20,
		nav: true,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoWidth:false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
    });
}

function sectionSlider() {
	var owl = $('section.slider .owl-carousel');
    owl.owlCarousel({
    	items: 1,
		margin: 0,
		nav: true,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoWidth:false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
    });
}

function slideFeature() {
	var owl = $('#tabp_1 .owl-carousel');
    owl.owlCarousel({
    	responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1,
		    },
		    // breakpoint from 768 up
		    768 : {
		     	items: 2,
		    },
		    992 : {
		    	items: 3,
		    },
		    1200 : {
		    	items: 4,
		    }
		},
		margin: 0,
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoWidth:false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
    });
}

function slideBestSell() {
	var owl = $('#tabp_2 .owl-carousel');
    owl.owlCarousel({
    	responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1,
		    },
		    // breakpoint from 768 up
		    768 : {
		     	items: 2,
		    },
		    992 : {
		    	items: 3,
		    },
		    1200 : {
		    	items: 4,
		    }
		},
		margin: 0,
		nav: false,
		dots: false,
		loop: true,
		autoplay: false,
		autoplayTimeout: 1000,
		autoWidth:false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
    });
}

function slidePopular() {
	var owl = $('#tabp_3 .owl-carousel');
    owl.owlCarousel({
    	responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1,
		    },
		    // breakpoint from 768 up
		    768 : {
		     	items: 2,
		    },
		    992 : {
		    	items: 3,
		    },
		    1200 : {
		    	items: 4,
		    }
		},
		margin: 0,
		nav: false,
		dots: false,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		autoWidth:false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
    });
}

function ratingEnable() {
    $('.example-bootstrap').barrating({
        theme: 'bootstrap-stars',
        showSelectedRating: false
    });
}

function ratingDisable() {
    $('select').barrating('destroy');
}

$('.rating-enable').click(function(event) {
    event.preventDefault();

    ratingEnable();

    $(this).addClass('deactivated');
    $('.rating-disable').removeClass('deactivated');
});

$('.rating-disable').click(function(event) {
    event.preventDefault();

    ratingDisable();

    $(this).addClass('deactivated');
    $('.rating-enable').removeClass('deactivated');
});

function columProduct(column) {
	switch(column) {
	    case 3:
	        $('.items-product').removeClass('four-column');
	        $(this).addClass('active')
	        break;
	    case 4:
	        $('.items-product').addClass('four-column');
	        $(this).removeClass('active')
	        break;
	    default:
	    	break;
	}
}