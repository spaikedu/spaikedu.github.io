document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".proyecto");

  const cargarElemento = (entry) => {
    entry.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  };

  const observer = new IntersectionObserver(cargarElemento, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  });

  elementos.forEach((el) => {
    observer.observe(el);
  });

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Cargar partículas de fondo
  tsParticles.load("tsparticles", {
    background: { color: "#ffffff" },
    particles: {
      number: { value: 50 },
      color: { value: "#00bcd4" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1 }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }
      },
      modes: {
        repulse: { distance: 100 }
      }
    }
  });

  // Evitar que el canvas de partículas bloquee clics
  setTimeout(() => {
    const canvas = document.querySelector("#tsparticles canvas");
    if (canvas) {
      canvas.style.pointerEvents = "none";
    }
  }, 500);

  // 🎊 Confeti al hacer clic en una imagen
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  });

  // 👋 Mensaje en consola
  console.log(
    "%c¡Hola curioso del código! 👨‍💻\n¿Te mola lo que ves? ¡Hablemos! 👉 edupar47@gmail.com",
    "font-size: 16px; color: teal;"
  );
});
