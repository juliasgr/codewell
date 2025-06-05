document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".estatisticas h3");
    const speed = 100; 
  
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };
  
    const animateCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText.replace(/\D/g, '');
  
          const increment = Math.ceil(target / speed);
  
          if (count < target) {
            counter.innerText = counter.innerText.includes('%') || counter.innerText.includes('+')
              ? counter.innerText[0] + (count + increment)
              : count + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = counter.getAttribute("data-label");
          }
        };
  
        if (!counter.classList.contains("counted") && isInViewport(counter)) {
          counter.classList.add("counted");
          updateCount();
        }
      });
    };
  
    window.addEventListener("scroll", animateCounters);
  });
  