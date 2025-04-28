/**
 * scripts.js
 * This file contains JavaScript code for the Domo-i project.
 * Author: [Your Name]
 * Date: [Insert Date]
 */

// Your JavaScript code starts here
// Function to handle form submission

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
];

let imageIndex = 0;
let lastX = 0;
const threshold = 40; // píxeles mínimos recorridos para cambiar la imagen

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  // Solo cambia la imagen si el mouse se movió suficiente en X
  if (Math.abs(clientX - lastX) > threshold) {
    lastX = clientX;

    // Crear imagen del rastro
    const img = document.createElement("img");
    img.src = images[imageIndex];
    img.className = "trail-image";
    img.style.left = `${clientX}px`;
    img.style.top = `${clientY}px`;
    document.body.appendChild(img);

    // Eliminar después de 1.5s
    setTimeout(() => img.remove(), 1500);

    // Avanzar al siguiente índice
    imageIndex = (imageIndex + 1) % images.length;
  }
});

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const tarjetas = document.querySelectorAll(".tarjeta1");

  tarjetas.forEach((tarjeta11, index) => {
    let rotacion = (scrollY + 700) / 10 - index * 20; // Factor de giro
    tarjeta11.style.transform = `rotateY(${rotacion + 180}deg)`;
    tarjeta22.style.transform = `rotateY(${rotacion + 180}deg)`;
    tarjeta33.style.transform = `rotateY(${rotacion + 180}deg)`;
    tarjeta44.style.transform = `rotateY(${rotacion + 180}deg)`;
  });
});

document.addEventListener("scroll", function () {
  const title = document.querySelector(".unidades-title");
  const scrollY = window.scrollY;
  const triggerHeight = 400; // El punto en el que empieza a aparecer el título

  if (scrollY > triggerHeight) {
    title.classList.add("scroll-active"); // Agrega la clase cuando se pase el umbral
  } else {
    title.classList.remove("scroll-active"); // Elimina la clase cuando se vuelva arriba
  }
});

const logo = document.getElementById("mainLogo");

logo.addEventListener("mouseenter", () => {
  logo.src = "IMAGENES/logo_gris.png"; // Cuando pase el cursor encima, cambia el logo
});

logo.addEventListener("mouseleave", () => {
  logo.src = "IMAGENES/logo_gris.png"; // Cuando salga el cursor, vuelve al logo original
});
