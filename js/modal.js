// modal.js — toasts e feedback simples
document.addEventListener('DOMContentLoaded', function(){
  const toast = document.getElementById('toast');

  function showToast(message, ms=3000){
    if(!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    setTimeout(()=> toast.hidden = true, ms);
  }

  // Form submissions -> show toast (demo)
  document.querySelectorAll('form').forEach(f=>{
    f.addEventListener('submit', (e)=>{
      e.preventDefault();
      showToast('Formulário enviado (simulado). Obrigado!');
      f.reset();
    });
  });
});
