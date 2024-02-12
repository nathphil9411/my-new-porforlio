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

const multiples = function (start, end, step = 1) {
  const arr = [];
  const dif = Math.floor((end - start) / step);
  arr.push(start);

  if (dif > 0) {
    for (let i = start; i < dif + start; i++) {
      const ne = arr.slice(-1);
      arr.push(ne[0] + step);
    }
  } else {
    for (let i = start; i > dif + start; i--) {
      const ne = arr.slice(-1);
      arr.push(ne[0] - step);
    }
  }

  console.log(arr);
  console.log(` ${arr.splice(1, arr.length - 2)}  `);
};
multiples(0, 100, 8);
