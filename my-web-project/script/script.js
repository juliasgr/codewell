/*const artigos = [
  {
    titulo: "A importância do TMO (tempo médio operacional) na satisfação do cliente",
    link: "artigos/tmo.html"
  },
  {
    titulo: "DevOps: o que é, o que faz e quando contratar?",
    link: "artigos/devops.html"
  },
  {
    titulo: "Como otimizar serviços de TI em 7 passos",
    link: "artigos/otimizacao.html"
  }
];*/
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburguer");
  const menu = document.querySelector("#menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
