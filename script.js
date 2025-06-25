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

  // 🕵️ Mensaje gracioso para quien abre la consola
  console.log(
    "%c🧐 ¡Hola hacker del F12! \n¿Te mola lo que ves? Pues imagina lo que puedo hacer para tu empresa. 😏\n📬 Contáctame: edupar47@gmail.com",
    "color: teal; font-size: 16px; font-weight: bold;"
  );
});
