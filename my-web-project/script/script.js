document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburguer");
  const menu = document.querySelector("#menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header) {
      setTimeout(() => {
        header.classList.add('header-animado');
      }, 100);
    }
  });