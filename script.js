// Animar proyectos al hacer scroll
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

  // Cargar partículas en el fondo
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
   // 🛠️ SOLUCIÓN FINAL: Forzar el canvas a no bloquear clics
  setTimeout(() => {
    const canvas = document.querySelector("#tsparticles canvas");
    if (canvas) {
      canvas.style.pointerEvents = "none";
    }
  }, 500);

  // Modo fiesta al hacer clic (excepto si es en un enlace o botón)
  document.addEventListener("click", (e) => {
    const isInteractive = e.target.closest("a, button");
    if (isInteractive) return; // no activar modo fiesta si se hace clic en enlace o botón

    // Cambiar fondo animado
    document.body.style.transition = "background 0.4s ease";
    document.body.style.background = "linear-gradient(135deg, #ff4081, #3f51b5, #00bcd4, #4caf50)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "fiesta 3s ease infinite";
    // Lanzar confeti 🎊
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });

   const texto = document.createElement("div");
    texto.textContent = "🎉 ¡Modo Fiesta Activado! 🎉";
    texto.style.position = "fixed";
    texto.style.top = "20px";
    texto.style.left = "50%";
    texto.style.transform = "translateX(-50%)";
    texto.style.background = "#fff";
    texto.style.color = "#000";
    texto.style.padding = "10px 20px";
    texto.style.borderRadius = "10px";
    texto.style.fontWeight = "bold";
    texto.style.zIndex = "9999";
    texto.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    texto.style.pointerEvents = "none"; // ✅ Esto es lo que faltaba
    document.body.appendChild(texto);


    // Eliminar texto y animación después de unos segundos
    setTimeout(() => {
      document.body.style.animation = "none";
      document.body.style.background = "#fff";
      texto.remove();
    }, 4000);
  });

  // Animación CSS para fondo fiesta
  const estiloAnimacion = document.createElement("style");
  estiloAnimacion.innerHTML = `
  @keyframes fiesta {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  `;
  document.head.appendChild(estiloAnimacion);
  console.log("%c¡Hola curioso del código! 👨‍💻\n¿Te mola lo que ves? ¡Hablemos! 👉 edupar47@gmail.com", "font-size: 16px; color: teal;");

});
console.log("%c¡Hola curioso del código! 👨‍💻\n¿Te mola lo que ves? ¡Hablemos! 👉 edupar47@gmail.com", "font-size: 16px; color: teal;");

