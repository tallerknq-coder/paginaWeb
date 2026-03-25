document.addEventListener("DOMContentLoaded", () => {

  // GSAP
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // ----------------------
    // REVEALS
    // ----------------------

    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      });
    });

    gsap.utils.toArray(".reveal-left").forEach(el => {
      gsap.from(el, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      });
    });

    gsap.utils.toArray(".reveal-right").forEach(el => {
      gsap.from(el, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      });
    });

    // ----------------------
    // PARALLAX (REVEAL PRO)
    // ----------------------

    gsap.utils.toArray(".parallax-img").forEach(img => {
      gsap.fromTo(img,
        { y: "-60%" },
        {
          y: "60%",
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom -20%",
            scrub: true
          }
        }
      );
    });

  }

  // ----------------------
  // CARRUSEL
  // ----------------------

  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!carousel || !nextBtn || !prevBtn) return;

  let index = 0;
  const total = carousel.children.length;
  const visible = 2;

  function isMobile() {
    return window.innerWidth < 768;
  }

  function updateCarousel() {
    if (isMobile()) return;

    const width = carousel.children[0].offsetWidth + 24;
    carousel.style.transform = `translateX(-${index * width}px)`;
  }

  nextBtn.onclick = () => {
    if (isMobile()) return;

    if (index < total - visible) {
      index++;
      updateCarousel();
    }
  };

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

});