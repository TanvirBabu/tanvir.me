(function($) {
	"use strict";

	//Preloader
	$(window).on('load', function() {  
		$('.spinner').fadeOut();
		$('.preloader').delay(350).fadeOut('slow'); 
	}); 
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	//LightBox / FancyBox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	// Magnific popup for gallery section  
		$('.portfolio-gallery-set').magnificPopup({
		  type: 'image',
		  mainClass: 'mfp-with-zoom', // this class is for CSS animation below
		  gallery:{
			enabled:true
		  }
		}); 

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation WOW
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',        // animated element css class (default is wow)
			animateClass: 'animated',  // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,      // trigger animations on mobile devices (default is true)
			live:         true      // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	// Portfolio
	$(document).ready(function(){
			 $('.image-link').magnificPopup({
				type:'image',
				gallery:{
					enabled: true
				}
			});
		})
	
	// Counter Up
	jQuery(document).ready(function( $ ) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
				});
			});
			
	// Owl Carousel / Testimonial
	$(document).ready(function() {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            margin: 10,
            nav: false,
            loop: true,
			autoplay: true,
			autoplayTimeout: 9000,
            responsive: {
              0: {
                items: 1
                 },
              }
           })
        })

	// When document is Scrollig, do
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	// When document is loading, do
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});	
	
	
})(window.jQuery);