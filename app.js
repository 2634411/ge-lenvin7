(function(){
  var d=document;
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  function setCur(c){
    d.querySelectorAll('.price').forEach(function(p){p.textContent=p.getAttribute('data-'+c)});
    d.querySelectorAll('[data-cur]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-cur')===c?'true':'false')});
    store('cur',c);
  }
  d.querySelectorAll('[data-cur]').forEach(function(b){b.addEventListener('click',function(){setCur(b.getAttribute('data-cur'))})});
  var saved=store('cur'); if(saved==='usd') setCur('usd');
  d.querySelectorAll('.filters button').forEach(function(b){
    b.addEventListener('click',function(){
      var c=b.getAttribute('data-cat');
      d.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
      d.querySelectorAll('.card').forEach(function(card){card.hidden=!(c==='all'||card.getAttribute('data-cat')===c)});
    });
  });
})();
