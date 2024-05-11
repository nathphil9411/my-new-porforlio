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
	const navlinks = document.querySelectorAll(".navlink");
	const header = document.querySelector("header");

	menuBtn.addEventListener("click", function () {
		header.classList.add("show-mobile-menu", "mobile-menu-open");
		this.style.display = "none";
	});

	function closeMenu() {
		header.classList.remove("mobile-menu-open");
		setTimeout(() => {
			header.classList.remove("show-mobile-menu");
		}, 200);
		menuBtn.style.display = "block";
	}

	closeMenuBtn.addEventListener("click", closeMenu);
	navlinks.forEach((link) => {
		link.addEventListener("click", closeMenu);
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
