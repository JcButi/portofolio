document.body.onload = function() {
  nbre = 2
  p = 0

  container = document.getElementById("container")
  gauche = document.getElementById("gauche")
  droite = document.getElementById("droite")
  container.style.width = (720 * nbre) + "px"

  for (let i = 1; i <= nbre; i++) {
    div = document.createElement("div")
    div.className = "photos"
    div.style.backgroundImage = "url('images/im" + i + ".svg')"
    container.appendChild(div)
  }
  masquer()

}
gauche.onclick = function() {
  if (p > -nbre + 1) {
    p--
    container.style.transform = "translate(" + p * 720 + "px)"
    container.style.transition = "all 0.5s ease"
  }
  masquer()
}
droite.onclick = function() {
  if (p < 0) {
    p++
    container.style.transform = "translate(" + p * 720 + "px)"
    container.style.transition = "all 0.5s ease"
  }
  masquer()
}

function masquer() {
  if (p == -nbre + 1) {
    gauche.style.visibility = "hidden"
  } else {
    gauche.style.visibility = "visible"
  }

  if (p == 0) {
    droite.style.visibility = "hidden"
  } else {
    droite.style.visibility = "visible"
  }

}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 150;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.salutation,.skill h4, .dev', {});
sr.reveal('.photo, .about__text h3, .about__text, .skill img', { delay: 400 });
sr.reveal('.icons', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });