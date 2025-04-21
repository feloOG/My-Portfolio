/* ---ANIMACION GRADUAL SECCIONES---*/

const elementosAnimados = document.querySelectorAll('.aparecer-scroll');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 
});
elementosAnimados.forEach(elemento => {
  observer.observe(elemento);
});

/* ---NAVEGACION LANDING NAV---*/

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

/* ---ANIMATION PERSONAL TEXT--- */

const textType = "Front-End Developer";
const textElement = document.getElementById('text-type');
let index = 0;
const speed = 80;
function typeWriter() {
if (index < textType.length) {
    textElement.textContent += textType.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
document.addEventListener('DOMContentLoaded', typeWriter);