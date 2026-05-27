
(function(){
  document.querySelectorAll('a[href]').forEach(function(link){
    link.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(!href || href.charAt(0)==='#' || href.indexOf('http')===0 || href.indexOf('mailto:')===0 || href.indexOf('tel:')===0) return;
      if(this.classList.contains('active')) return;
      e.preventDefault();
      document.body.classList.add('is-leaving');
      setTimeout(function(){ window.location.href = href; }, 260);
    });
  });
})();
