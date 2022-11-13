const hamburger = document.getElementById('hamburger')
const closeButton = document.getElementById('mobile-menu-close')
const mobileMenu = document.getElementById('mobile-menu')
const mainBody = document.getElementById('main-body')
const link = document.querySelectorAll('.mobile-menu-link')

hamburger.addEventListener('click', removeHidden)
closeButton.addEventListener('click', addHidden)
link.forEach((element) => { element.addEventListener("click", addHidden)})

function removeHidden(){
  mobileMenu.classList.remove('hidden')
  mainBody.classList.add('blur')
}

function addHidden(){
  mobileMenu.classList.add('hidden')
  mainBody.classList.remove('blur')
}


const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

// Bouncing animation
document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
  element.addEventListener("mouseover", (e) => bounce(e.target));
});

function bounce(letter) {
  if (!letter.classList.contains("bounce")) {
      letter.classList.add("bounce");
      setTimeout(
          function () {
              letter.classList.remove("bounce");
          },
          1500
      );
  }
}

