
(function(){document.querySelectorAll('.tab-link[href]').forEach(link=>{link.addEventListener('click',function(e){const href=this.getAttribute('href');if(!href||this.classList.contains('active'))return;e.preventDefault();document.body.classList.add('is-leaving');setTimeout(()=>{window.location.href=href},240);});});})();
