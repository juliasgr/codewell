document.addEventListener("DOMContentLoaded", () => {

    const feedbacks = [
      {
        nome: "Matheus Himpel",
        cargo: "Coordenador e Gerente de Projetos",
        texto: "A plataforma tem muitas funcionalidades e o suporte é sempre ágil e claro!"
      },
      {
        nome: "Joana Almeida",
        cargo: "Analista de Suporte",
        texto: "O atendimento da Codewell é impecável e as automações ajudam muito."
      }
    ];
  
    const feedbackContainer = document.getElementById("feedbacks-container");
    feedbacks.forEach(fb => {
      const card = document.createElement("div");
      card.className = "feedback-card";
      card.innerHTML = `
        <p>"${fb.texto}"</p>
        <strong>${fb.nome}</strong><br>
        <small>${fb.cargo}</small>
      `;
      feedbackContainer.appendChild(card);
    });
  
    const artigos = [
      {
        titulo: "A importância do TMO (tempo médio operacional) na satisfação do cliente",
        link: "#"
      },
      {
        titulo: "DevOps: o que é, o que faz e quando contratar?",
        link: "#"
      },
      {
        titulo: "Como otimizar serviços de TI em 7 passos",
        link: "#"
      }
    ];
  
    const artigoContainer = document.getElementById("artigos-container");
    artigos.forEach(art => {
      const card = document.createElement("div");
      card.className = "artigo-card";
      card.innerHTML = `
        <h3>${art.titulo}</h3>
        <a href="${art.link}">Ler artigo →</a>
      `;
      artigoContainer.appendChild(card);
    });
  });
  