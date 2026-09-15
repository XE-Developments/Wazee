const reveal = new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.section,.service-grid article,.featured,.split-work,.gallery img').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});
