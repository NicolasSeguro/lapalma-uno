/* Template Name: Sami
   Author: Theme_Family
   Version: 1.0.0
   Created: April 2022
   File Description: Main Js file of the theme
*/

(function($) {
    "use strict";
		
		
	// Preloader
	$(window).on('load', function() { 
		 setTimeout(function () {
            $('.atf-status').fadeOut();
        }, 3000);
	}); 

	//  Window scroll sticky class add
	function windowScroll() {
		const navbar = document.getElementById("navbar");
		if (
			document.body.scrollTop >= 50 ||
			document.documentElement.scrollTop >= 50
		) {
			navbar.classList.add("header-sticky");
		} else {
			navbar.classList.remove("header-sticky");
		}
	}

	window.addEventListener('scroll', (ev) => {
		ev.preventDefault();
		windowScroll();
	   
	})

	
	// Smooth scroll 
	var scroll = new SmoothScroll('#navbar-scroling a', {
		speed: 300,
		offset: 60
	});

	// Navbar Active Class

	var spy = new Gumshoe('#navbar-scroling a', {
		// Active classes
		navClass: 'active', // applied to the nav list item
		contentClass: 'active', // applied to the content
		offset: 70
	});

	 /* ------------------  NAVBAR TOGGLE ------------------ */
	$('#navbar-scroling').on('click', function() {
		$('.navbar-toggler').toggleClass('active');
		$('.navbar-collapse').toggleClass('show')
	});
	
	// Back to top button 
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.back-to-top').addClass('active');
			if (scrolled < 300) $('.back-to-top').removeClass('active');
		});
		
		// Click Event
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 500);
		});
	});

	
	// Brand-slider

	var slider = tns({
		container: '.atf-brand-active',
		loop: true,
		autoplay: true,
		nav: false,
		controlsPosition: 'bottom',
		controls: false,
		autoplayButtonOutput: false,
		controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		responsive: {
			1024: {
				gutter: 25,
				items: 4
			},
			768: {
				gutter: 20,
				items: 3
			}
		}
	});
	
// Brand-slider



	// client-slider

	var slider = tns({
		container: '.review-slider',
		loop: true,
		autoplay: true,
		nav: false,
		controlsPosition: 'bottom',
		controls: false,
		autoplayButtonOutput: false,
	   controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		responsive: {
			1024: {
				gutter: 25,
				items: 2
			},
			768: {
				gutter: 20,
				items: 1
			}
		}
	});
	
	
	/*START ANIMATION JS*/
		  AOS.init();
		/*END ANIMATION JS*/

	
	/*Start gallery Design*/
		$('#gallery-slider').owlCarousel({
			margin:5,
			autoplay:true,
			items: 4,
			loop:true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				992:{
					items:4
				}
			}
		})

			
	
	
	/* --------------------------------------------------------
					   LightCase jQuery Active
		--------------------------------------------------------- */
			$('a[data-rel^=lightcase]').lightcase({
				transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
				swipe: true,
				maxWidth: 1170,
				maxHeight: 600,
			});

	
	/* --------------------------------------------------------
             Mailchamp
        --------------------------------------------------------- */

		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
	
})(jQuery);