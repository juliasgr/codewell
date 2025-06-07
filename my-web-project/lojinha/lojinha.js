document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('.produto-img');

 
    const modal = document.createElement('div');
    modal.classList.add('js-imagem');
    modal.innerHTML = '<img src="" alt="Imagem ampliada">';
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');

    imagens.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('visivel');
      });
    });

   
    modal.addEventListener('click', (e) => {
      if (e.target !== modalImg) {
        modal.classList.remove('visivel');
      }
    });
  });

