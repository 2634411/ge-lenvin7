(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var L=document.documentElement.lang,LD=window.LD,LOC={ru:'ru-RU',ka:'ka-GE',en:'en-GB'}[L],LI=L==='ru'?0:(L==='ka'?1:2);
var X={
title:['Онлайн-запись к врачу','ონლაინ ჩაწერა ექიმთან','Book a doctor online'],
s1:['1. Выберите клинику','1. აირჩიეთ კლინიკა','1. Choose a clinic'],
s2:['2. Выберите врача','2. აირჩიეთ ექიმი','2. Choose a doctor'],
s3:['3. Выберите день','3. აირჩიეთ დღე','3. Pick a day'],
s4:['4. Выберите время','4. აირჩიეთ დრო','4. Pick a time'],
s5:['5. Ваши данные','5. თქვენი მონაცემები','5. Your details'],
noDoc:['В этой клинике пока нет врачей в расписании','ამ კლინიკაში ჯერ ექიმები არ არიან განრიგში','No doctors scheduled at this clinic yet'],
fr:['свободно: ','თავისუფალია: ','free: '],
off:['выходной','დასვენება','day off'],
full:['нет окон','დრო არ არის','full'],
hint4:['Занятое время недоступно.','დაკავებული დრო მიუწვდომელია.','Taken times are not available.'],
name:['Имя','სახელი','Name'],phone:['Телефон','ტელეფონი','Phone'],
reason:['Причина визита','ვიზიტის მიზეზი','Reason for the visit'],
r1:['Осмотр и план лечения — 30 ₾','გასინჯვა და მკურნალობის გეგმა — 30 ₾','Check-up and treatment plan — 30 ₾'],
r2:['Консультация по имплантации','კონსულტაცია იმპლანტაციაზე','Implant consultation'],
r3:['Профессиональная гигиена','პროფესიული ჰიგიენა','Professional cleaning'],
r4:['Приём ребёнка','ბავშვის მიღება','Child appointment'],
r5:['Другое, болит зуб','სხვა, კბილი მტკივა','Other, toothache'],
consent:['Согласен на обработку персональных данных','ვეთანხმები პერსონალური მონაცემების დამუშავებას','I agree to the processing of my personal data'],
submit:['Записаться','ჩაწერა','Book now'],
summary:['Ваша запись','თქვენი ჩაწერა','Your appointment'],
dash:['не выбрано','არ არის არჩეული','not chosen'],
sClinic:['Клиника','კლინიკა','Clinic'],sDoc:['Врач','ექიმი','Doctor'],sWhen:['Когда','როდის','When'],
okH:['Вы записаны!','თქვენ ჩაწერილი ხართ!','You are booked!'],
okP:['Администратор подтвердит запись. В настоящем проекте подтверждение и напоминание придут вам в WhatsApp или SMS.','ადმინისტრატორი ჩანაწერს დაადასტურებს. რეალურ პროექტში დადასტურება და შეხსენება WhatsApp-ით ან SMS-ით მოვა.','The administrator will confirm your booking. In a real project, a confirmation and a reminder arrive by WhatsApp or SMS.'],
code:['Номер записи','ჩანაწერის ნომერი','Booking number'],
again:['Записать ещё','კიდევ ჩაწერა','Book another'],
toAdmin:['Посмотреть в панели администратора →','ადმინისტრატორის პანელში ნახვა →','See it in the admin panel →'],
taken:['Это время только что заняли. Выберите другое.','ეს დრო ახლახან დაიკავეს. აირჩიეთ სხვა.','That time was just taken. Please pick another.'],
invalid:['Укажите имя и телефон, отметьте согласие.','მიუთითეთ სახელი და ტელეფონი, მონიშნეთ თანხმობა.','Enter your name and phone and tick the consent box.'],
demoNote:['Демо: записи хранятся в вашем браузере. В настоящем проекте они лежат на сервере и видны всем сотрудникам.','დემო: ჩანაწერები თქვენს ბრაუზერში ინახება. რეალურ პროექტში ისინი სერვერზეა და ყველა თანამშრომელს ხედავს.','Demo: bookings are stored in your browser. In a real project they live on a server and are visible to all staff.'],
admNote:['В настоящей версии: вход по логину, записи на сервере, напоминания пациентам в WhatsApp и SMS, связь с вашей CRM.','რეალურ ვერსიაში: შესვლა ლოგინით, ჩანაწერები სერვერზე, პაციენტებისთვის შეხსენებები WhatsApp-ით და SMS-ით, თქვენს CRM-თან კავშირი.','In the real version: login accounts, bookings on a server, WhatsApp and SMS reminders, a link to your CRM.'],
adm:['Панель администратора','ადმინისტრატორის პანელი','Admin panel'],
login:['Войти','შესვლა','Sign in'],pass:['Пароль','პაროლი','Password'],
passHint:['Демо-пароль: demo','დემო პაროლი: demo','Demo password: demo'],
wrong:['Неверный пароль','არასწორი პაროლი','Wrong password'],logout:['Выйти','გამოსვლა','Sign out'],
tOver:['Обзор','მიმოხილვა','Overview'],tBook:['Записи','ჩანაწერები','Bookings'],tSched:['Расписание врачей','ექიმების განრიგი','Doctors’ schedule'],
kToday:['Записей на сегодня','დღევანდელი ჩანაწერები','Bookings today'],kNew:['Новых, ждут подтверждения','ახალი, დასადასტურებელი','New, to confirm'],
kLoad:['Загрузка на 7 дней','დატვირთვა 7 დღეზე','Load, next 7 days'],kCan:['Отменено','გაუქმებული','Cancelled'],
upc:['Ближайшие записи','უახლოესი ჩანაწერები','Upcoming bookings'],byDoc:['Загрузка врачей на 7 дней','ექიმების დატვირთვა 7 დღეზე','Doctor load, next 7 days'],
empty:['Записей пока нет','ჩანაწერები ჯერ არ არის','No bookings yet'],
cCode:['№','№','No.'],cWhen:['Когда','როდის','When'],cPat:['Пациент','პაციენტი','Patient'],cDoc:['Врач','ექიმი','Doctor'],cCl:['Клиника','კლინიკა','Clinic'],cWhy:['Причина','მიზეზი','Reason'],cSt:['Статус','სტატუსი','Status'],
stN:['Новая','ახალი','New'],stC:['Подтверждена','დადასტურებული','Confirmed'],stD:['Приём состоялся','მიღება შედგა','Completed'],stX:['Отменена','გაუქმებული','Cancelled'],
aC:['Подтвердить','დადასტურება','Confirm'],aD:['Пришёл','მოვიდა','Arrived'],aX:['Отменить','გაუქმება','Cancel'],aDel:['Удалить','წაშლა','Delete'],aR:['Вернуть','დაბრუნება','Restore'],
all:['Все','ყველა','All'],search:['Поиск по имени или телефону','ძებნა სახელით ან ტელეფონით','Search by name or phone'],
newb:['+ Новая запись','+ ახალი ჩანაწერი','+ New booking'],save:['Сохранить','შენახვა','Save'],close:['Закрыть','დახურვა','Close'],
saved:['Сохранено. Пациенты уже видят новое расписание.','შენახულია. პაციენტები უკვე ხედავენ ახალ განრიგს.','Saved. Patients already see the new schedule.'],
wd:['Рабочие дни','სამუშაო დღეები','Working days'],hrs:['Часы приёма','მიღების საათები','Hours'],from:['с','დან','from'],to:['до','მდე','to'],
stp:['Длина приёма, мин','მიღების ხანგრძლივობა, წთ','Appointment length, min'],cls:['Клиники','კლინიკები','Clinics'],
offd:['Выходные даты','დასვენების თარიღები','Days off'],addOff:['Добавить','დამატება','Add'],
reset:['Сбросить демо-данные','დემო მონაცემების განულება','Reset demo data'],
resetQ:['Удалить все записи и вернуть исходное расписание?','წაიშალოს ყველა ჩანაწერი და დაბრუნდეს საწყისი განრიგი?','Delete all bookings and restore the original schedule?'],
wkSlots:['Свободных окон на 7 дней: ','თავისუფალი სლოტები 7 დღეზე: ','Free slots, next 7 days: '],
created:['Запись создана','ჩანაწერი შეიქმნა','Booking created'],time:['Время','დრო','Time'],date:['Дата','თარიღი','Date']
};
function t(k){return X[k][LI]}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var mem={},KB='lumia.demo.book',KS='lumia.demo.sched';
function ld(k,d){var v=null;try{v=localStorage.getItem(k)}catch(e){v=mem[k]||null}return v?JSON.parse(v):d}
function sv(k,v){var s=JSON.stringify(v);mem[k]=s;try{localStorage.setItem(k,s)}catch(e){}}
function pad(n){return (n<10?'0':'')+n}
function iso(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
function pd(s){var a=s.split('-');return new Date(+a[0],+a[1]-1,+a[2])}
function addD(d,n){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate()+n);return x}
function fmt(d,o){if(L==='ka'){var W=['კვი','ორშ','სამ','ოთხ','ხუთ','პარ','შაბ'],M=['იან','თებ','მარ','აპრ','მაი','ივნ','ივლ','აგვ','სექ','ოქტ','ნოე','დეკ'],ML=['იანვარი','თებერვალი','მარტი','აპრილი','მაისი','ივნისი','ივლისი','აგვისტო','სექტემბერი','ოქტომბერი','ნოემბერი','დეკემბერი'];
 if(o.weekday&&o.day&&o.month==='long')return W[d.getDay()]+', '+d.getDate()+' '+ML[d.getMonth()];
 if(o.weekday)return W[d.getDay()];if(o.day&&o.month)return d.getDate()+' '+M[d.getMonth()];if(o.month)return M[d.getMonth()]}
 return new Intl.DateTimeFormat(LOC,o).format(d)}
function hash(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))>>>0;return h}
function doc(id){return LD.doctors.filter(function(d){return d.id===id})[0]}
function clinic(i){return LD.clinics[i]}
function cfg(d){var o=ld(KS,{})[d.id]||{};return {days:o.days||d.days,from:o.from!=null?o.from:d.from,to:o.to!=null?o.to:d.to,step:o.step||d.step,clinics:o.clinics||d.clinics,off:o.off||[]}}
function books(){return ld(KB,[])}
function slots(d,ds){var c=cfg(d),dt=pd(ds),out=[];if(c.days.indexOf(dt.getDay())<0||c.off.indexOf(ds)>=0)return out;
 var now=new Date(),isT=ds===iso(now),nm=now.getHours()*60+now.getMinutes(),bk=books();
 for(var m=c.from*60;m+c.step<=c.to*60;m+=c.step){var tm=pad(Math.floor(m/60))+':'+pad(m%60),st='free';
  if(isT&&m<=nm+15)st='past';
  else if(bk.some(function(b){return b.doc===d.id&&b.date===ds&&b.time===tm&&b.status!=='x'}))st='mine';
  else if(hash(d.id+ds+tm)%100<28)st='busy';
  out.push({t:tm,s:st})}
 return out}
function seed(){if(ld(KB,null)!==null)return;var names=['Nika B.','Tamar K.','Giorgi M.','Eka L.','Levan D.','Salome T.','Irakli Ch.','Mariam S.'],ph=['+995 555 12 34 56','+995 599 22 33 44','+995 577 90 11 22','+995 551 40 50 60','+995 593 77 88 99','+995 558 31 32 33','+995 574 10 20 30','+995 595 61 62 63'],rs=['r1','r2','r3','r4','r5'],sts=['n','c','n','c','d','n','x','c'],out=[],i=0,today=new Date();
 for(var k=0;k<8;k++){var d=LD.doctors[k%LD.doctors.length],dt=iso(addD(today,k<3?0:(k%4)));var sl=slots(d,dt).filter(function(x){return x.s==='free'});if(!sl.length)continue;var s=sl[(k*3)%sl.length],c=cfg(d);
  out.push({id:'L-'+(1001+i),doc:d.id,clinic:c.clinics[0],date:dt,time:s.t,name:names[k],phone:ph[k],reason:rs[k%5],status:sts[k],created:Date.now()-k*3600000});i++}
 sv(KB,out)}
function next(){var m=1000;books().forEach(function(b){m=Math.max(m,+b.id.split('-')[1])});return 'L-'+(m+1)}
function toast(msg){var e=$('#toast');if(!e){e=document.createElement('div');e.id='toast';e.className='toast';document.body.appendChild(e)}e.textContent=msg;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove('on')},3200)}
function wdays(){var a=[];for(var k=0;k<7;k++){var d=new Date(2024,0,1+k);a.push({dow:(k+1)%7,lbl:fmt(d,{weekday:'short'})})}return a}
function dlong(ds){return fmt(pd(ds),{weekday:'short',day:'numeric',month:'long'})}

/* ---------- patient ---------- */
function patient(){var app=$('#app');seed();
 var q=new URLSearchParams(location.search),S={cl:null,doc:null,date:null,time:null,done:null,err:''};
 if(q.get('doc')&&doc(q.get('doc'))){S.doc=q.get('doc');S.cl=cfg(doc(S.doc)).clinics[0]}
 else if(q.get('clinic')!==null&&clinic(+q.get('clinic')))S.cl=+q.get('clinic');
 function freeCount(d,ds){return slots(d,ds).filter(function(x){return x.s==='free'}).length}
 function draw(){
  if(S.done){var b=S.done;app.innerHTML='<div class="okbox"><span class="okic" aria-hidden="true">✓</span><h2>'+t('okH')+'</h2><p class="big">'+esc(dlong(b.date))+', '+b.time+'</p><p>'+esc(doc(b.doc).name)+' · '+esc(clinic(b.clinic).name)+', '+esc(clinic(b.clinic).addr)+'</p><p>'+t('code')+': <b>'+b.id+'</b></p><p class="sm">'+t('okP')+'</p><div class="okb"><button class="btn" id="again">'+t('again')+'</button><a class="btn ghost" href="'+LD.admin+'">'+t('toAdmin')+'</a></div></div>';$('#again').onclick=function(){S={cl:null,doc:null,date:null,time:null,done:null,err:''};draw()};return}
  var h='<div class="bkg"><div class="steps">';
  h+='<section class="step"><h2>'+t('s1')+'</h2><div class="opts">'+LD.clinics.map(function(c,i){return '<button class="opt'+(S.cl===i?' on':'')+'" data-cl="'+i+'"><b>'+esc(c.name)+'</b><span>'+esc(c.addr)+'</span></button>'}).join('')+'</div></section>';
  if(S.cl!==null){var dl=LD.doctors.filter(function(d){return cfg(d).clinics.indexOf(S.cl)>=0});
   h+='<section class="step"><h2>'+t('s2')+'</h2>'+(dl.length?'<div class="opts">'+dl.map(function(d){return '<button class="opt dopt'+(S.doc===d.id?' on':'')+'" data-d="'+d.id+'"><i class="av">'+d.id+'</i><span class="dt"><b>'+esc(d.name)+'</b><span>'+esc(d.spec)+'</span></span></button>'}).join('')+'</div>':'<p class="sm">'+t('noDoc')+'</p>')+'</section>'}
  if(S.doc){var d=doc(S.doc),days=[];for(var n=0;n<14;n++)days.push(iso(addD(new Date(),n)));
   h+='<section class="step"><h2>'+t('s3')+'</h2><div class="days">'+days.map(function(ds){var sl=slots(d,ds),f=sl.filter(function(x){return x.s==='free'}).length,dt=pd(ds),dis=!f;return '<button class="day'+(S.date===ds?' on':'')+'"'+(dis?' disabled':'')+' data-dt="'+ds+'"><small>'+esc(fmt(dt,{weekday:'short'}))+'</small><b>'+dt.getDate()+'</b><small>'+esc(fmt(dt,{month:'short'}))+'</small><em>'+(sl.length?(f?t('fr')+f:t('full')):t('off'))+'</em></button>'}).join('')+'</div></section>'}
  if(S.doc&&S.date){var sl=slots(doc(S.doc),S.date);
   h+='<section class="step"><h2>'+t('s4')+'</h2><div class="times">'+sl.map(function(x){var free=x.s==='free';return '<button class="tm'+(S.time===x.t?' on':'')+(free?'':' bz')+'"'+(free?'':' disabled')+' data-tm="'+x.t+'">'+x.t+'</button>'}).join('')+'</div><p class="sm">'+t('hint4')+'</p></section>'}
  if(S.time){h+='<section class="step"><h2>'+t('s5')+'</h2><form id="pf" novalidate><div class="two"><label>'+t('name')+'<input id="pn" autocomplete="name" required></label><label>'+t('phone')+'<input id="pp" type="tel" autocomplete="tel" placeholder="+995 5__ __ __ __" required></label></div><label>'+t('reason')+'<select id="pr">'+['r1','r2','r3','r4','r5'].map(function(k){return '<option value="'+k+'">'+t(k)+'</option>'}).join('')+'</select></label><label class="chk"><input type="checkbox" id="pc"> '+t('consent')+'</label><p class="err" id="pe">'+esc(S.err)+'</p><button class="btn big" type="submit">'+t('submit')+'</button></form></section>'}
  h+='</div><aside class="sumc"><h3>'+t('summary')+'</h3><dl><dt>'+t('sClinic')+'</dt><dd>'+(S.cl!==null?esc(clinic(S.cl).name):'<i>'+t('dash')+'</i>')+'</dd><dt>'+t('sDoc')+'</dt><dd>'+(S.doc?esc(doc(S.doc).name):'<i>'+t('dash')+'</i>')+'</dd><dt>'+t('sWhen')+'</dt><dd>'+(S.date&&S.time?esc(dlong(S.date))+', '+S.time:'<i>'+t('dash')+'</i>')+'</dd></dl><p class="sm">'+t('demoNote')+'</p></aside></div>';
  app.innerHTML=h;
  $$('[data-cl]').forEach(function(b){b.onclick=function(){S.cl=+b.dataset.cl;if(S.doc&&cfg(doc(S.doc)).clinics.indexOf(S.cl)<0)S.doc=null;S.date=S.time=null;draw()}});
  $$('[data-d]').forEach(function(b){b.onclick=function(){S.doc=b.dataset.d;S.date=S.time=null;draw()}});
  $$('[data-dt]').forEach(function(b){b.onclick=function(){S.date=b.dataset.dt;S.time=null;draw()}});
  $$('[data-tm]').forEach(function(b){b.onclick=function(){S.time=b.dataset.tm;S.err='';draw();var f=$('#pf');if(f)f.scrollIntoView({behavior:'smooth',block:'center'})}});
  var f=$('#pf');if(f)f.onsubmit=function(ev){ev.preventDefault();var n=$('#pn').value.trim(),p=$('#pp').value.replace(/\D/g,'');if(n.length<2||p.length<9||!$('#pc').checked){$('#pe').textContent=t('invalid');return}
   var d=doc(S.doc),ok=slots(d,S.date).some(function(x){return x.t===S.time&&x.s==='free'});if(!ok){S.time=null;S.err=t('taken');draw();toast(t('taken'));return}
   var b={id:next(),doc:S.doc,clinic:S.cl,date:S.date,time:S.time,name:n,phone:$('#pp').value.trim(),reason:$('#pr').value,status:'n',created:Date.now()},a=books();a.push(b);sv(KB,a);S.done=b;draw();window.scrollTo({top:0,behavior:'smooth'})}}
 draw();window.addEventListener('storage',function(){if(!S.done&&!($('#pf')&&$('#pn').value))draw()})}

/* ---------- admin ---------- */
function admin(){var app=$('#app'),tab='over',flt={st:'',doc:'',cl:'',q:''},adding=false;
 function authed(){try{return sessionStorage.getItem('lumia.admin')==='1'}catch(e){return mem.auth===1}}
 function setAuth(v){mem.auth=v?1:0;try{v?sessionStorage.setItem('lumia.admin','1'):sessionStorage.removeItem('lumia.admin')}catch(e){}}
 function stName(s){return t({n:'stN',c:'stC',d:'stD',x:'stX'}[s])}
 function login(){app.innerHTML='<form class="login" id="lf"><h2>'+t('adm')+'</h2><label>'+t('pass')+'<input id="lp" type="password" autocomplete="current-password" autofocus></label><p class="err" id="le"></p><button class="btn big" type="submit">'+t('login')+'</button><p class="sm">'+t('passHint')+'</p></form>';
  $('#lf').onsubmit=function(ev){ev.preventDefault();if($('#lp').value==='demo'){setAuth(true);seed();draw()}else $('#le').textContent=t('wrong')}}
 function weekStats(d){var f=0,a=0;for(var n=0;n<7;n++){slots(d,iso(addD(new Date(),n))).forEach(function(x){if(x.s==='past')return;a++;if(x.s==='free')f++})}return {f:f,a:a}}
 function badge(s){return '<span class="bd bd-'+s+'">'+stName(s)+'</span>'}
 function over(){var bk=books(),td=iso(new Date()),today=bk.filter(function(b){return b.date===td&&b.status!=='x'}).length,nw=bk.filter(function(b){return b.status==='n'}).length,cn=bk.filter(function(b){return b.status==='x'}).length,tot=0,fr=0;
  var rows=LD.doctors.map(function(d){var w=weekStats(d);tot+=w.a;fr+=w.f;return {d:d,p:w.a?Math.round(100*(w.a-w.f)/w.a):0}});var load=tot?Math.round(100*(tot-fr)/tot):0;
  var up=bk.filter(function(b){return b.status!=='x'&&b.status!=='d'&&(b.date+b.time)>=(td+'00:00')}).sort(function(a,b){return (a.date+a.time)<(b.date+b.time)?-1:1}).slice(0,6);
  return '<div class="kpis"><div class="kpi"><b>'+today+'</b><span>'+t('kToday')+'</span></div><div class="kpi hot"><b>'+nw+'</b><span>'+t('kNew')+'</span></div><div class="kpi"><b>'+load+'%</b><span>'+t('kLoad')+'</span></div><div class="kpi"><b>'+cn+'</b><span>'+t('kCan')+'</span></div></div>'+
  '<div class="two2"><div class="pan"><h3>'+t('upc')+'</h3>'+(up.length?'<ul class="ul">'+up.map(function(b){return '<li><b>'+esc(dlong(b.date))+', '+b.time+'</b><span>'+esc(b.name)+' · '+esc(doc(b.doc).name)+'</span>'+badge(b.status)+'</li>'}).join('')+'</ul>':'<p class="sm">'+t('empty')+'</p>')+'</div>'+
  '<div class="pan"><h3>'+t('byDoc')+'</h3>'+rows.map(function(r){return '<div class="lbar"><span>'+esc(r.d.name)+'</span><i><u style="width:'+r.p+'%"></u></i><em>'+r.p+'%</em></div>'}).join('')+'</div></div>'+
  '<p class="sm">'+t('admNote')+'</p><p><button class="btn ghost" id="rst">'+t('reset')+'</button></p>'}
 function list(){var bk=books().slice().sort(function(a,b){return (a.date+a.time)<(b.date+b.time)?-1:1}),q=flt.q.toLowerCase().replace(/\s/g,'');
  bk=bk.filter(function(b){return (!flt.st||b.status===flt.st)&&(!flt.doc||b.doc===flt.doc)&&(flt.cl===''||String(b.clinic)===flt.cl)&&(!q||(b.name+b.phone).toLowerCase().replace(/\s/g,'').indexOf(q)>=0)});
  var sel=function(id,opts,v){return '<select id="'+id+'">'+opts.map(function(o){return '<option value="'+esc(o[0])+'"'+(String(o[0])===String(v)?' selected':'')+'>'+esc(o[1])+'</option>'}).join('')+'</select>'};
  var h='<div class="flt">'+sel('fs',[['',t('all')+' · '+t('cSt')],['n',stName('n')],['c',stName('c')],['d',stName('d')],['x',stName('x')]],flt.st)+sel('fd',[['',t('all')+' · '+t('cDoc')]].concat(LD.doctors.map(function(d){return [d.id,d.name]})),flt.doc)+sel('fc',[['',t('all')+' · '+t('cCl')]].concat(LD.clinics.map(function(c,i){return [i,c.name]})),flt.cl)+'<input id="fq" placeholder="'+t('search')+'" value="'+esc(flt.q)+'"><button class="btn" id="nb">'+t('newb')+'</button></div>';
  if(adding)h+=addForm();
  h+='<div class="tw"><table class="tbl"><thead><tr><th>'+t('cCode')+'</th><th>'+t('cWhen')+'</th><th>'+t('cPat')+'</th><th>'+t('cDoc')+'</th><th>'+t('cWhy')+'</th><th>'+t('cSt')+'</th><th></th></tr></thead><tbody>'+
  (bk.length?bk.map(function(b){var a='';if(b.status==='n')a+='<button data-a="c" data-i="'+b.id+'">'+t('aC')+'</button>';if(b.status==='c')a+='<button data-a="d" data-i="'+b.id+'">'+t('aD')+'</button>';if(b.status==='n'||b.status==='c')a+='<button data-a="x" data-i="'+b.id+'">'+t('aX')+'</button>';if(b.status==='x')a+='<button data-a="n" data-i="'+b.id+'">'+t('aR')+'</button>';a+='<button class="dl" data-a="del" data-i="'+b.id+'">'+t('aDel')+'</button>';
   return '<tr class="r-'+b.status+'"><td>'+b.id+'</td><td><b>'+esc(dlong(b.date))+'</b><br>'+b.time+'</td><td><b>'+esc(b.name)+'</b><br><a href="tel:'+esc(b.phone.replace(/[^+\d]/g,''))+'">'+esc(b.phone)+'</a></td><td>'+esc(doc(b.doc).name)+'<br><small>'+esc(clinic(b.clinic).name)+'</small></td><td>'+esc(t(b.reason))+'</td><td>'+badge(b.status)+'</td><td class="act">'+a+'</td></tr>'}).join(''):'<tr><td colspan="7" class="sm">'+t('empty')+'</td></tr>')+'</tbody></table></div>';
  return h}
 function addForm(){var d0=LD.doctors[0];return '<div class="pan addf"><h3>'+t('newb')+'</h3><div class="two2"><label>'+t('cDoc')+'<select id="ad">'+LD.doctors.map(function(d){return '<option value="'+d.id+'">'+esc(d.name)+'</option>'}).join('')+'</select></label><label>'+t('date')+'<input type="date" id="adt" value="'+iso(new Date())+'" min="'+iso(new Date())+'"></label><label>'+t('time')+'<select id="atm"></select></label><label>'+t('name')+'<input id="an"></label><label>'+t('phone')+'<input id="ap" type="tel"></label></div><p><button class="btn" id="asv">'+t('save')+'</button> <button class="btn ghost" id="acl">'+t('close')+'</button></p></div>'}
 function sched(){var so=ld(KS,{});return '<div class="grid2">'+LD.doctors.map(function(d){var c=cfg(d),w=weekStats(d);
  return '<div class="pan sc" data-doc="'+d.id+'"><h3><i class="av">'+d.id+'</i>'+esc(d.name)+'</h3><p class="sm">'+esc(d.spec)+'</p><p class="sm"><b>'+t('wkSlots')+w.f+'</b></p>'+
  '<p class="lb">'+t('wd')+'</p><div class="chks">'+wdays().map(function(x){return '<label><input type="checkbox" data-wd="'+x.dow+'"'+(c.days.indexOf(x.dow)>=0?' checked':'')+'><span>'+esc(x.lbl)+'</span></label>'}).join('')+'</div>'+
  '<p class="lb">'+t('hrs')+'</p><div class="hrsr">'+t('from')+' <select data-f="from">'+hoursOpt(c.from,6,21)+'</select> '+t('to')+' <select data-f="to">'+hoursOpt(c.to,8,22)+'</select> · '+t('stp')+' <select data-f="step">'+[20,30,45,60].map(function(s){return '<option'+(s===c.step?' selected':'')+'>'+s+'</option>'}).join('')+'</select></div>'+
  '<p class="lb">'+t('cls')+'</p><div class="chks">'+LD.clinics.map(function(cl,i){return '<label><input type="checkbox" data-cl="'+i+'"'+(c.clinics.indexOf(i)>=0?' checked':'')+'><span>'+esc(cl.name)+'</span></label>'}).join('')+'</div>'+
  '<p class="lb">'+t('offd')+'</p><div class="offs">'+c.off.sort().map(function(o){return '<button class="chip on" data-rm="'+o+'">'+esc(fmt(pd(o),{day:'numeric',month:'short'}))+' ×</button>'}).join('')+'</div><p><input type="date" data-od min="'+iso(new Date())+'"> <button class="btn ghost" data-ao>'+t('addOff')+'</button></p>'+
  '<p><button class="btn" data-sv>'+t('save')+'</button></p></div>'}).join('')+'</div>'}
 function hoursOpt(v,a,b){var s='';for(var h=a;h<=b;h++)s+='<option value="'+h+'"'+(h===v?' selected':'')+'>'+pad(h)+':00</option>';return s}
 function draw(){if(!authed()){login();return}
  var tabs=[['over','tOver'],['book','tBook'],['sch','tSched']];
  app.innerHTML='<div class="admh"><button class="btn ghost" id="lo">'+t('logout')+'</button></div><div class="tabs">'+tabs.map(function(x){return '<button class="tab'+(tab===x[0]?' on':'')+'" data-tb="'+x[0]+'">'+t(x[1])+'</button>'}).join('')+'</div><div id="pane">'+(tab==='over'?over():tab==='book'?list():sched())+'</div>';
  $('#lo').onclick=function(){setAuth(false);draw()};
  $$('[data-tb]').forEach(function(b){b.onclick=function(){tab=b.dataset.tb;adding=false;draw()}});
  wire()}
 function reslot(){var d=doc($('#ad').value),sl=slots(d,$('#adt').value).filter(function(x){return x.s==='free'});$('#atm').innerHTML=sl.length?sl.map(function(x){return '<option>'+x.t+'</option>'}).join(''):'<option value="">'+t('full')+'</option>'}
 function setSt(id,s){var a=books();a.forEach(function(b){if(b.id===id)b.status=s});sv(KB,a);draw()}
 function wire(){
  var rst=$('#rst');if(rst)rst.onclick=function(){if(confirm(t('resetQ'))){try{localStorage.removeItem(KB);localStorage.removeItem(KS)}catch(e){}delete mem[KB];delete mem[KS];seed();draw()}};
  if(tab==='book'){
   [['fs','st'],['fd','doc'],['fc','cl']].forEach(function(p){$('#'+p[0]).onchange=function(){flt[p[1]]=this.value;draw()}});
   $('#fq').oninput=function(){flt.q=this.value;var pos=this.selectionStart;draw();var n=$('#fq');n.focus();n.setSelectionRange(pos,pos)};
   $('#nb').onclick=function(){adding=!adding;draw()};
   $$('[data-a]').forEach(function(b){b.onclick=function(){var id=b.dataset.i,a=b.dataset.a;if(a==='del'){sv(KB,books().filter(function(x){return x.id!==id}));draw()}else setSt(id,a)}});
   if(adding){reslot();$('#ad').onchange=reslot;$('#adt').onchange=reslot;$('#acl').onclick=function(){adding=false;draw()};
    $('#asv').onclick=function(){var n=$('#an').value.trim(),tm=$('#atm').value;if(n.length<2||!tm||!$('#adt').value)return;var a=books();a.push({id:next(),doc:$('#ad').value,clinic:cfg(doc($('#ad').value)).clinics[0],date:$('#adt').value,time:tm,name:n,phone:$('#ap').value.trim()||'—',reason:'r1',status:'c',created:Date.now()});sv(KB,a);adding=false;draw();toast(t('created'))}}}
  if(tab==='sch')$$('.sc').forEach(function(card){var id=card.dataset.doc,so=ld(KS,{}),o=so[id]=so[id]||{},c=cfg(doc(id));
   card.querySelector('[data-ao]').onclick=function(){var v=card.querySelector('[data-od]').value;if(!v)return;var off=(o.off||c.off).slice();if(off.indexOf(v)<0)off.push(v);o.off=off;sv(KS,so);draw()};
   $$('[data-rm]',card).forEach(function(b){b.onclick=function(){o.off=(o.off||c.off).filter(function(x){return x!==b.dataset.rm});sv(KS,so);draw()}});
   card.querySelector('[data-sv]').onclick=function(){o.days=$$('[data-wd]',card).filter(function(x){return x.checked}).map(function(x){return +x.dataset.wd});o.clinics=$$('[data-cl]',card).filter(function(x){return x.checked}).map(function(x){return +x.dataset.cl});o.from=+card.querySelector('[data-f=from]').value;o.to=+card.querySelector('[data-f=to]').value;o.step=+card.querySelector('[data-f=step]').value;if(o.to<=o.from)o.to=o.from+1;sv(KS,so);draw();toast(t('saved'))}})}
 draw();window.addEventListener('storage',function(){if(authed()&&!adding&&tab!=='sch')draw()})}

if($('#app')){document.body.dataset.page==='admin'?admin():patient()}
})();
