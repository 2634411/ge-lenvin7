(function(){
  var d=document, cur='gel';
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  function fmt(n,c){return c==='usd'?'$'+n:n+' \u20be'}
  function card(c){
    var tot=+c.getAttribute('data-'+cur), list=[];
    c.querySelectorAll('.opts input:checked').forEach(function(i){tot+=+i.getAttribute('data-'+cur);list.push(i.getAttribute('data-t'))});
    c.classList.toggle('sel',list.length>0);
    c.querySelector('.tot .price').textContent=fmt(tot,cur);
    var msg=c.getAttribute('data-hello')+c.getAttribute('data-title');
    if(list.length){msg+='\n'+c.getAttribute('data-optl')+': '+list.join('; ')}
    msg+='\n'+c.getAttribute('data-totl')+': '+fmt(tot,cur);
    var wa=c.querySelector('a.wa'), ml=c.querySelector('a.mail');
    wa.href=wa.href.split('?')[0]+'?text='+encodeURIComponent(msg);
    ml.href=ml.href.split('?')[0]+'?subject='+encodeURIComponent(c.getAttribute('data-title'))+'&body='+encodeURIComponent(msg);
  }
  function setCur(c){
    cur=c;
    d.querySelectorAll('.price').forEach(function(p){if(!p.closest('.tot'))p.textContent=p.getAttribute('data-'+c)});
    d.querySelectorAll('[data-cur]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-cur')===c?'true':'false')});
    d.querySelectorAll('.card').forEach(card);
    store('cur',c);
  }
  d.querySelectorAll('[data-cur]').forEach(function(b){b.addEventListener('click',function(){setCur(b.getAttribute('data-cur'))})});
  d.querySelectorAll('.card').forEach(function(c){
    c.querySelectorAll('.opts input').forEach(function(i){i.addEventListener('change',function(){card(c)})});
    card(c);
  });
  if(store('cur')==='usd') setCur('usd');
  d.querySelectorAll('.filters button').forEach(function(b){
    b.addEventListener('click',function(){
      var c=b.getAttribute('data-cat');
      d.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
      d.querySelectorAll('.card').forEach(function(card){card.hidden=!(c==='all'||card.getAttribute('data-cat')===c)});
    });
  });
})();
