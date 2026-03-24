// GSAP
gsap.registerPlugin(ScrollTrigger);

// ----------------------
// ANIMACIONES SCROLL
// ----------------------

// Reveal vertical
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: { trigger: el }
  });
});

// Reveal izquierda
gsap.from(".reveal-left", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: { trigger: ".reveal-left" }
});

// Reveal derecha
gsap.from(".reveal-right", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: { trigger: ".reveal-right" }
});


// ----------------------
// CARRUSEL
// ----------------------

const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;
const total = carousel.children.length;
const visible = 2;

// Detectar móvil
function isMobile() {
  return window.innerWidth < 768;
}

// Mover carrusel
function updateCarousel() {
  if (isMobile()) return;

  const width = carousel.children[0].offsetWidth + 24; // gap
  carousel.style.transform = `translateX(-${index * width}px)`;
}

// Botón siguiente
nextBtn.onclick = () => {
  if (isMobile()) return;

  if (index < total - visible) {
    index++;
    updateCarousel();
  }
};

// Botón anterior
prevBtn.onclick = () => {
  if (isMobile()) return;

  if (index > 0) {
    index--;
    updateCarousel();
  }
};

// Auto slide (solo desktop)
setInterval(() => {
  if (isMobile()) return;

  if (index < total - visible) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
}, 4000);