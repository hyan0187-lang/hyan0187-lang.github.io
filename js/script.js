// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
                                

(function () {
  const hero = document.querySelector("#hero-2274.hero-slider");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const prevBtn = hero.querySelector(".hero-prev");
  const nextBtn = hero.querySelector(".hero-next");
  const dotsWrap = hero.querySelector(".hero-dots");

  let index = slides.findIndex(s => s.classList.contains("is-active"));
  if (index < 0) index = 0;

  // build dots
  dotsWrap.innerHTML = "";
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "hero-dot" + (i === index ? " is-active" : "");
    b.setAttribute("aria-label", `Go to slide ${i + 1}`);
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
  });

  const dots = Array.from(hero.querySelectorAll(".hero-dot"));

  function render() {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  nextBtn?.addEventListener("click", next);
  prevBtn?.addEventListener("click", prev);

  // optional: auto-play (comment out if you don't want)
  let timer = setInterval(next, 6000);

  // pause on hover
  hero.addEventListener("mouseenter", () => clearInterval(timer));
  hero.addEventListener("mouseleave", () => (timer = setInterval(next, 6000)));

  render();
})();

$(document).ready(function () {

    $("#filters button").on("click", function () {
        let filterValue = $(this).data("filter");

        $("#products a").hide();

        $(filterValue).parent().show();
    });

});
$("#filters button").on("click", function () {
  let filterValue = $(this).data("filter");

  $("#products a").hide();

  $(filterValue).parent().show();
});
