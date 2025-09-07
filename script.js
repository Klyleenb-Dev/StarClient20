// Minimal JS for interactivity (no external libs)
document.addEventListener('DOMContentLoaded',function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      const t = document.querySelector(this.getAttribute('href'));
      if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });
});