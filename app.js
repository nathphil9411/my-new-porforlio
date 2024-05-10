"use strict";
// particlejs config
window.onload = function () {
	Particles.init({
		selector: ".particles-js",
		color: ["white", "pink"],
		responsive: { connectParticles: true },
	});
};

//Scroll to the top functionality
const scrollTop = document.getElementById("scrollTop");

scrollTop.addEventListener("click", function () {
	window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", function () {
	if (this.window.pageYOffset > 200) {
		scrollTop.style.display = "block";
	} else {
		scrollTop.style.display = "none";
	}
});

//Mobile navigation Implementation
const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenu = document.querySelector("#close-menu-btn");

document.addEventListener("DOMContentLoaded", function () {
	const menuBtn = document.getElementById("menu-btn");
	const closeMenuBtn = document.getElementById("close-menu-btn");

	menuBtn.addEventListener("click", function () {
		header.classList.toggle("show-mobile-menu");
		this.style.display = "none";
	});

	closeMenuBtn.addEventListener("click", function () {
		header.classList.toggle("show-mobile-menu");
		menuBtn.style.display = "block";
	});

	function toggleMenuButtonVisibility() {
		if (window.innerWidth < 768) {
			menuBtn.style.display = "block";
		} else {
			menuBtn.style.display = "none";
		}
	}

	// Initial check and event listener for window resize
	toggleMenuButtonVisibility();
	window.addEventListener("resize", toggleMenuButtonVisibility);
});
