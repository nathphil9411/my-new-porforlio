"use strict";
// particlejs config
window.onload = function () {
	Particles.init({
		selector: ".particles-js",
		color: ["white", "pink"],
		responsive: { connectParticles: true },
	});
};

//variables
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
