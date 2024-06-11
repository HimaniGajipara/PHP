AOS.init({
	duration: 800,
	easing: 'slide'
});
// jQuery("body").prepend("<div class='loader-wrap'><svg viewBox='0 0 1000 1000' preserveAspectRatio='none'><path id='svg' d='M0,1005S175,995,500,995s500,5,500,5V0H0Z'></path></svg><div class='loader-wrap-heading'><div class='load-text'><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></div></div></div>");
// jQuery(document).ready(function() {
// 	jQuery(".loader-wrap").remove();
// }); 

$(document).ready(function () {
	$('#marquee-slider').slick({
		autoplay: true,
		autoplaySpeed: 0,
		speed: 4000,
		arrows: false,
		swipe: false,
		slidesToShow: 1,
		cssEase: 'linear',
		pauseOnFocus: false,
		pauseOnHover: false,
		variableWidth: true,
	});

	$('#talk-slider').slick({
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		arrows: false,
		swipe: false,
		slidesToShow: 1,
		cssEase: 'linear',
		pauseOnFocus: false,
		pauseOnHover: false,
		variableWidth: true,
	});

	$('#about-slider').slick({
		autoplay: true,
		autoplaySpeed: 0,
		speed: 12000,
		arrows: false,
		swipe: true,
		slidesToShow: 1,
		cssEase: 'linear',
		pauseOnFocus: false,
		pauseOnHover: false,
		variableWidth: true,
		useTransform: false,
	});


	$('#talk-slider').on("mouseenter", function () {
		$('.cursor').addClass('show');
	});
	$('#talk-slider').on("mouseleave", function () {
		$('.cursor').removeClass('show').animate({ transform: 'scale(0)' });
	});


	// Light dark mode js
	if (localStorage.getItem("mode") == "dark") {
		$("body").addClass("dark-mode");
		$("body").removeClass("light-mode");
		$(".toggle-mode").removeClass("light");
		$(".toggle-mode").addClass("dark");
	} else if (localStorage.getItem("mode") == "light") {
		$("body").removeClass("dark-mode");
		$("body").addClass("light-mode");
		$(".toggle-mode").removeClass("dark");
		$(".toggle-mode").addClass("light");
	}
	var mq = window.matchMedia('(prefers-color-scheme: dark)');
	if (localStorage.getItem("mode") == "light") {
		$("body").removeClass("dark-mode");
		$("body").addClass("light-mode");
		$(".toggle-mode").removeClass("dark");
		$(".toggle-mode").addClass("light");
	} else if (mq.matches) {
		$("body").addClass("dark-mode");
		$("body").removeClass("light-mode");
		$(".toggle-mode").removeClass("light");
		$(".toggle-mode").addClass("dark");
	}
	$(".toggle-mode").on("click", function () {
		$(".toggle-mode").addClass("active");
		if ($("body").hasClass("dark-mode")) {
			$("body").removeClass("dark-mode");
			$("body").addClass("light-mode");
			$(".toggle-mode").removeClass("dark");
			$(".toggle-mode").addClass("light");
			localStorage.setItem("mode", "light");
		} else {
			$("body").addClass("dark-mode");
			$("body").removeClass("light-mode");
			$(".toggle-mode").removeClass("light");
			$(".toggle-mode").addClass("dark");
			localStorage.setItem("mode", "dark");
		}
	});


	// humburgur menu mobile

	$('.navbar-toggle').on("click", function () {
		$(this).toggleClass('menu-show');
		$('.backdrop-wrap').toggleClass('open');
		$('.navbar-compo-mobile').toggleClass('menu-open');
	});

	$('.navbar-compo-mobile .nav-link').on("click", function () {
		$('.navbar-toggle').removeClass('menu-show');
		$('.backdrop-wrap').removeClass('open');
		$('.navbar-compo-mobile').removeClass('menu-open');
	});


	//   cursor
	document
		.getElementsByTagName("body")[0]
		.addEventListener("mousemove", function (n) {
			(t.style.left = n.clientX + "px"),
				(t.style.top = n.clientY + "px");
		});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
	}


	// parallaxElements
	$(".hg-animate").hover3d({
		selector: ".animated-card",
		sensitivity: 35,
		perspective: 900
	});

	// smooth scroll page
	const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
		direction: 'vertical', // vertical, horizontal
		gestureDirection: 'vertical', // vertical, horizontal, both
		smooth: true,
		mouseMultiplier: 1,
		smoothTouch: false,
		touchMultiplier: 2,
		infinite: false,
	})


	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)

	//   cursor
	document
		.getElementsByTagName("body")[0]
		.addEventListener("mousemove", function (n) {
			(t.style.left = n.clientX + "px"),
				(t.style.top = n.clientY + "px");
		});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
	}

	$('#talk-slider').on("mouseenter", function () {
		$('.cursor').addClass('show');
	});
	$('#talk-slider').on("mouseleave", function () {
		$('.cursor').removeClass('show').animate({ transform: 'scale(0)' });
	});


	//   cursor
	document
		.getElementsByTagName("body")[0]
		.addEventListener("mousemove", function (n) {
			(t.style.left = n.clientX + "px"),
				(t.style.top = n.clientY + "px");
		});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
	}

	$('#talk-slider').on("mouseenter", function () {
		$('.cursor').addClass('show');
	});
	$('#talk-slider').on("mouseleave", function () {
		$('.cursor').removeClass('show').animate({ transform: 'scale(0)' });
	});


	//Scroll Back To Top

	$('.sticky-back-to-top').click(function () {
		$("html, body").animate({ scrollTop: "0" }, 900);
	});



});
$(window).on('scroll', function () {
	if ($(document).scrollTop() > 1000) {
		$('.sticky-footer').addClass('sticky');
	}
	else if ($(document).scrollTop() < 1000) {
		$('.sticky-footer').removeClass('sticky');
	}

	//  Parrallax vertical Line
	const verticalLine = document.getElementById("vertical");
	scrollPosition = ((window.scrollY * 100) / ($(document).height() / 28)) * 100 / $('#vertical').parent().height();
	verticalLine.style.height = `${scrollPosition}%`
});

