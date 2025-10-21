// menu.js — controle de menu hambúrguer e dropdown acessível
document.addEventListener('DOMContentLoaded', function(){
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  if(hamburger){
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      if(navbar){
        navbar.style.display = expanded ? 'none' : 'block';
      }
    });
  }

  // close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.header-inner')) {
      if(navbar && window.innerWidth <= 768) navbar.style.display = 'none';
      if(hamburger) hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // basic dropdown keyboard support
  document.querySelectorAll('.dropdown > button').forEach(btn=>{
    btn.addEventListener('keydown', (ev)=>{
      if(ev.key === 'ArrowDown'){ 
        const menu = btn.nextElementSibling;
        menu.querySelector('a')?.focus();
      }
    });
  });
});
