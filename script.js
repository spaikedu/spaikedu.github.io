document.addEventListener("DOMContentLoaded", () => {
  // Animar proyectos al hacer scroll
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

  // Scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Cargar partículas y forzar pointer-events: none en el canvas
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
  }).then(() => {
    // 🔐 Esperar a que el canvas se cree y asegurar que no bloquee clics
    const canvas = document.querySelector("#tsparticles canvas");
    if (canvas) {
      canvas.style.pointerEvents = "none";
    }
  });

  // 🎊 Confeti solo al hacer clic en imágenes
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", (e) => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        }
      });
    });
  });

  // Mensaje oculto para curiosos
  console.log(
    "%c¡Hola curioso del código! 👨‍💻\n¿Te mola lo que ves? ¡Hablemos! 👉 edupar47@gmail.com",
    "font-size: 16px; color: teal;"
  );
});
