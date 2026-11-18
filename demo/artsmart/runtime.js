
(function(){
  class DCLogic{
    constructor(props){this.props=props||{};this.state={};}
    setState(p){Object.assign(this.state,typeof p==='function'?p(this.state):p);this.__render();}
  }
  window.DCLogic=DCLogic;
  const HOLE=/\{\{\s*([A-Za-z0-9_.$]+)\s*\}\}/g, ONE=/^\s*\{\{\s*([A-Za-z0-9_.$]+)\s*\}\}\s*$/;
  const lookup=(path,sc)=>path.split('.').reduce((o,k)=>o==null?o:o[k],sc);
  const LINKS={'Main.dc.html':'index.html','Booking.dc.html':'booking.html','Owner.dc.html':'owner.html'};
  const SKIP=['hint-placeholder-count','hint-placeholder-val','list','as','value'];
  function build(node,sc,out){
    if(node.nodeType===3){out.appendChild(document.createTextNode(node.nodeValue.replace(HOLE,(m,p)=>{const v=lookup(p,sc);return v==null?'':v;})));return;}
    if(node.nodeType!==1)return;
    const tag=node.tagName.toLowerCase();
    if(tag==='sc-for'){
      const list=lookup(ONE.exec(node.getAttribute('list'))[1],sc)||[],as=node.getAttribute('as');
      list.forEach(it=>{const s=Object.create(sc);s[as]=it;[...node.childNodes].forEach(c=>build(c,s,out));});return;
    }
    if(tag==='sc-if'){
      if(lookup(ONE.exec(node.getAttribute('value'))[1],sc))[...node.childNodes].forEach(c=>build(c,sc,out));return;
    }
    const el=document.createElement(tag);
    for(const a of node.attributes){
      let n=a.name,v=a.value,m=ONE.exec(v);
      if(/^on[a-z]+$/.test(n)&&m){const f=lookup(m[1],sc);if(typeof f==='function')el.addEventListener(n.slice(2),f);continue;}
      if(m){const val=lookup(m[1],sc);
        if(n==='disabled'||n==='checked'){if(val)el.setAttribute(n,'');continue;}
        v=val==null?'':String(val);
      } else v=v.replace(HOLE,(x,p)=>{const q=lookup(p,sc);return q==null?'':q;});
      if(n==='href'&&LINKS[v])v=LINKS[v];
      el.setAttribute(n,v);
    }
    [...node.childNodes].forEach(c=>build(c,sc,el));
    out.appendChild(el);
  }
  function start(){
    const host=document.querySelector('x-dc');
    const helmet=host.querySelector('helmet');
    if(helmet){[...helmet.children].forEach(c=>document.head.appendChild(c));helmet.remove();}
    const tpl=document.createElement('div');
    [...host.childNodes].forEach(c=>tpl.appendChild(c));
    const code=document.querySelector('script[data-dc-script]').textContent;
    const C=new Function(code+';return Component;')();
    const inst=new C({});
    const render=()=>{
      const y=window.scrollY,ae=document.activeElement;
      const fresh=document.createElement('div');
      const vals=Object.assign(Object.create(null),inst.renderVals());
      [...tpl.childNodes].forEach(c=>build(c,vals,fresh));
      host.replaceChildren(...fresh.childNodes);
      window.scrollTo(0,y);
    };
    inst.__render=render;render();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
