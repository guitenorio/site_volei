
// script.js
// Efeitos de Transição
const links = document.querySelectorAll('nav ul li a');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
  });
});

