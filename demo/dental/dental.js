(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var L=document.documentElement.lang;function tr(ru,ka,en){return L==='ru'?ru:(L==='ka'?ka:en)}
$$('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(ev){ev.preventDefault();var o=$('.ok',f);if(o)o.hidden=false;$$('button[type=submit]',f).forEach(function(b){b.disabled=true})})});
$$('.tab').forEach(function(b){b.addEventListener('click',function(){$$('.tab').forEach(function(x){x.classList.toggle('on',x===b)});$$('.pane').forEach(function(p){p.hidden=p.getAttribute('data-p')!==b.getAttribute('data-t')})})});
$$('.chip').forEach(function(b){b.addEventListener('click',function(){$$('.chip').forEach(function(x){x.classList.toggle('on',x===b)});var f=b.getAttribute('data-f');$$('.doc').forEach(function(d){d.hidden=!(f==='all'||d.getAttribute('data-c')===f)})})});
function fmt(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,' ')}
var s=$('#c-sum'),m=$('#c-mo');function calc(){if(!s)return;$('#c-sumo').textContent=fmt(s.value);$('#c-moo').textContent=m.value;$('#c-res').textContent=fmt(s.value/m.value)+' ₾'}
if(s){s.addEventListener('input',calc);m.addEventListener('input',calc);calc()}
var md=$('#modal');function open(h){$('#mbody').innerHTML=h;md.hidden=false}
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
if(md){md.addEventListener('click',function(e){if(e.target===md||e.target.classList.contains('mx'))md.hidden=true});document.addEventListener('keydown',function(e){if(e.key==='Escape')md.hidden=true})}
$$('.vid').forEach(function(b){b.addEventListener('click',function(){open('<h3>'+esc(b.getAttribute('data-v'))+'</h3><div class="poster"><span class="play">▶</span></div><p class="sm">'+tr('Здесь будет видеоотзыв пациента (YouTube/Vimeo), грузится только по клику.','აქ იქნება პაციენტის ვიდეოშეფასება (YouTube/Vimeo), იტვირთება მხოლოდ დაწკაპუნებით.','A patient video review will play here (YouTube/Vimeo), loaded only on click.')+'</p>')})});
$$('.doccard').forEach(function(b){b.addEventListener('click',function(){open('<h3>'+esc(b.getAttribute('data-d'))+'</h3><div class="mdoc">'+tr('Здесь будет скан документа','აქ იქნება დოკუმენტის სკანი','A scan of the document will be here')+'</div>')})});
var t=$('#tour-v');if(t){var x=0,drag=false,sx=0,bx=0,auto=true;function set(v){x=v;t.style.backgroundPosition=x+'px 0'}
 t.addEventListener('pointerdown',function(e){drag=true;auto=false;sx=e.clientX;bx=x;t.setPointerCapture(e.pointerId);var h=$('.hint',t);if(h)h.style.display='none'});
 t.addEventListener('pointermove',function(e){if(drag)set(bx+(e.clientX-sx))});t.addEventListener('pointerup',function(){drag=false});
 $('.ta.l',t).addEventListener('click',function(){auto=false;set(x+220)});$('.ta.r',t).addEventListener('click',function(){auto=false;set(x-220)});
 $$('.tt').forEach(function(b){b.addEventListener('click',function(){$$('.tt').forEach(function(y){y.classList.toggle('on',y===b)});t.style.backgroundImage='url('+b.getAttribute('data-img')+')'})});
 (function loop(){if(auto)set(x-0.25);requestAnimationFrame(loop)})()}
})();
