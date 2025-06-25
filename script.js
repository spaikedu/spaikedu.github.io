document.addEventListener("DOMContentLoaded", () => {
  // Animación al hacer scroll
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

  // Cargar partículas
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
  }).then((container) => {
    // Esperar a que se cree el canvas y deshabilitar su interacción
    const canvas = container.canvas.element;
    if (canvas) {
      canvas.style.pointerEvents = "none";
      console.log("✅ Canvas desactivado para clics");
    }
  });

  // 🎊 Confeti al hacer clic en imágenes
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

  // Consola oculta
  console.log(
    "%c¡Hola curioso del código! 👨‍💻\n¿Te mola lo que ves? ¡Hablemos! 👉 edupar47@gmail.com",
    "font-size: 16px; color: teal;"
  );
});
