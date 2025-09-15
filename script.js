// Sticky header
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.faq-icon');
    if(answer.style.display === 'block'){
      answer.style.display = 'none';
      icon.textContent = '+';
    } else {
      answer.style.display = 'block';
      icon.textContent = '−';
    }
  });
});


// Botao voltar ao topo
// Mostrar/esconder botão "voltar ao topo"
const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});

// Rolagem suave até o topo
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Menu Hambúrguer

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});
