const SERVICES=[
["Corte clásico","Tijera y máquina, lavado y peinado",12000,"30 min"],
["Corte y barba","Perfilado con navaja y toalla caliente",18000,"50 min"],
["Afeitado con navaja","Ritual completo de afeitado tradicional",10000,"30 min"],
["Arreglo de barba","Diseño, recorte y aceite hidratante",8000,"20 min"],
["Corte infantil","Para menores de 12 años",9000,"25 min"],
["Coloración y matiz","Cobertura de canas o tono nuevo",22000,"60 min"]];
const PRODUCTS=[
["Máquina Pro Cut 9000","Máquinas","Motor rotativo, batería de 5 horas y 3 peines.",89000,"clipper"],
["Trimmer de precisión","Máquinas","Cuchilla de acero para contornos y barba.",42000,"clipper"],
["Afeitadora de lámina","Máquinas","Acabado al ras, resistente al agua.",56000,"clipper"],
["Cera mate fijación fuerte","Ceras y peinado","Textura seca, sin brillo. 100 g.",9500,"tin"],
["Pomada brillo clásico","Ceras y peinado","Base de agua, fijación media. 120 g.",10500,"tin"],
["Arcilla de volumen","Ceras y peinado","Para cabello fino y mucho cuerpo. 90 g.",11000,"tin"],
["Aceite de barba cedro","Cuidado de barba","Hidrata y suaviza. Frasco de 30 ml.",12500,"bottle"],
["Bálsamo para barba","Cuidado de barba","Controla el frizz y da forma. 60 g.",11500,"tin"],
["Champú anticaspa","Cuidado de barba","Limpieza diaria, uso en cabello y barba.",8900,"bottle"],
["Peine de madera","Accesorios","Madera de peral, dientes pulidos.",6500,"comb"],
["Cepillo para barba","Accesorios","Cerdas de jabalí, mango de bambú.",13500,"comb"],
["Navaja de acero","Accesorios","Hoja intercambiable, mango de latón.",34000,"comb"]];
const IMG=[
"images/productos/maquina-pro-cut-9000.jpg",
"images/productos/trimmer-de-precision.jpg",
"images/productos/afeitadora-de-lamina.jpg",
"images/productos/cera-mate-fijacion-fuerte.webp",
"images/productos/pomada-brillo-clasico.jpg",
"images/productos/arcilla-de-volumen.jpg",
"images/productos/aceite-de-barba-cedro.jpg",
"images/productos/balsamo-para-barba.jpg",
"images/productos/champu-anticaspa.webp",
"images/productos/peine-de-madera.jpg",
"images/productos/cepillo-para-barba.webp",
"images/productos/navaja-de-acero.webp"
];
const WA="5491164227116";/* número de WhatsApp con código de país, ej. 5491122334455 */
const waLink=t=>"https://wa.me/"+WA+"?text="+encodeURIComponent(t);
const fmt=n=>"$"+n.toLocaleString("es-AR");
const $=id=>document.getElementById(id);
const icons={
clipper:'<svg width="70" height="90" viewBox="0 0 70 90" fill="none"><rect x="16" y="8" width="38" height="66" rx="14" fill="#1f3a6e"/><rect x="22" y="72" width="26" height="12" fill="#b8924a"/><circle cx="35" cy="30" r="6" fill="#c0262d"/></svg>',
tin:'<svg width="90" height="70" viewBox="0 0 90 70" fill="none"><rect x="10" y="22" width="70" height="38" rx="6" fill="#b8924a"/><rect x="8" y="12" width="74" height="16" rx="6" fill="#8a6a2f"/><rect x="26" y="34" width="38" height="14" fill="#f3f0ea"/></svg>',
bottle:'<svg width="50" height="92" viewBox="0 0 50 92" fill="none"><rect x="18" y="4" width="14" height="14" fill="#8a6a2f"/><rect x="8" y="18" width="34" height="68" rx="8" fill="#1f3a6e"/><rect x="14" y="40" width="22" height="22" fill="#f3f0ea"/></svg>',
comb:'<svg width="100" height="50" viewBox="0 0 100 50" fill="none"><rect x="4" y="6" width="92" height="14" rx="5" fill="#8a6a2f"/><g fill="#8a6a2f"><rect x="10" y="20" width="4" height="22"/><rect x="22" y="20" width="4" height="22"/><rect x="34" y="20" width="4" height="22"/><rect x="46" y="20" width="4" height="22"/><rect x="58" y="20" width="4" height="22"/><rect x="70" y="20" width="4" height="22"/><rect x="82" y="20" width="4" height="22"/></g></svg>'};
const svcSel=$("fs");
const SIMG=["images/servicios/corte-clasico.jpg", "images/servicios/corte-y-barba.jpg", "images/servicios/afeitado-con-navaja.jpg", "images/servicios/arreglo-de-barba.jpg", "images/servicios/corte-infantil.jpg", "images/servicios/coloracion-y-matiz.jpg"];
const SPOS=["50% 30%", "50% 35%", "60% 40%", "50% 40%", "50% 25%", "50% 30%"];
$("services").innerHTML=SERVICES.map((s,i)=>`<article class="svc"><img src="${SIMG[i]}" alt="${s[0]}" style="object-position:${SPOS[i]}" loading="lazy"><span class="price">${fmt(s[2])}</span><div class="svcTxt"><h3>${s[0]}</h3><p>${s[1]}</p><small>${s[3]}</small><button class="btn" data-book="${i}">Reservar</button></div></article>`).join("");
svcSel.innerHTML=SERVICES.map((s,i)=>`<option value="${i}">${s[0]} (${fmt(s[2])})</option>`).join("");
const cats=["Todos",...new Set(PRODUCTS.map(p=>p[1]))];
let cat="Todos";const cart={};
function drawTabs(){$("tabs").innerHTML=cats.map(c=>`<button class="tab" aria-pressed="${c===cat}" data-cat="${c}">${c}</button>`).join("")}
function drawGrid(){$("grid").innerHTML=PRODUCTS.map((p,i)=>({p,i})).filter(o=>cat==="Todos"||o.p[1]===cat).map(({p,i})=>`<div class="card"><div class="art">${IMG[i]?`<img src="${IMG[i]}" alt="${p[0]}" loading="lazy">`:icons[p[4]]}</div><div class="body"><h3>${p[0]}</h3><p>${p[2]}</p><div class="row"><span class="price">${fmt(p[3])}</span><button class="add" data-add="${i}">Agregar</button></div></div></div>`).join("")}
function drawCart(){
const ids=Object.keys(cart);let total=0,n=0;
$("items").innerHTML=ids.length?ids.map(i=>{const p=PRODUCTS[i],q=cart[i];total+=p[3]*q;n+=q;return `<li><span>${p[0]}<br><small>${fmt(p[3])}</small></span><span class="qty"><button data-q="${i}:-1" aria-label="Quitar uno">−</button> ${q} <button data-q="${i}:1" aria-label="Agregar uno">+</button></span></li>`}).join(""):"<li>Tu carrito está vacío. Agrega productos desde la tienda.</li>";
$("total").textContent=fmt(total);$("count").textContent=n}
document.addEventListener("click",e=>{
const t=e.target.closest("button");if(!t)return;
if(t.dataset.cat){cat=t.dataset.cat;drawTabs();drawGrid()}
if(t.dataset.add){const i=t.dataset.add;cart[i]=(cart[i]||0)+1;drawCart();t.textContent="Agregado";t.classList.add("done");setTimeout(()=>{t.textContent="Agregar";t.classList.remove("done")},900)}
if(t.dataset.q){const[i,d]=t.dataset.q.split(":");cart[i]+=+d;if(cart[i]<=0)delete cart[i];drawCart()}
if(t.dataset.book!==undefined){if(t.dataset.book!=="")svcSel.value=t.dataset.book;$("bmsg").innerHTML="";renderBooking();$("dlg").showModal()}
});
$("openCart").onclick=()=>$("drawer").classList.add("open");
$("closeCart").onclick=()=>$("drawer").classList.remove("open");
function sendWA(text,box){const u=waLink(text);window.open(u,"_blank");$(box).innerHTML='<div class="ok">Se abrió WhatsApp con tu mensaje. Si no se abrió, <a style="color:#fff" href="'+u+'" target="_blank" rel="noopener">toca aquí</a>.</div>'}
$("checkout").onclick=()=>{const ids=Object.keys(cart);if(!ids.length){$("cartmsg").innerHTML='<div class="ok">Agrega al menos un producto para finalizar.</div>';return}
let tot=0;const l=ids.map(i=>{tot+=PRODUCTS[i][3]*cart[i];return "- "+cart[i]+" x "+PRODUCTS[i][0]+" ("+fmt(PRODUCTS[i][3]*cart[i])+")"});
sendWA("Hola, quiero hacer este pedido:\n"+l.join("\n")+"\nTotal: "+fmt(tot),"cartmsg")};
$("cancel").onclick=()=>$("dlg").close();
const HOURS={0:null,1:[9,20],2:[9,20],3:[9,20],4:[9,20],5:[9,20],6:[9,18]};/* [apertura, cierre] por día de la semana (0 = domingo, null = cerrado) */
let selDay=null,selTime=null,dayList=[];
const pad=n=>String(n).padStart(2,"0"),hm=m=>pad(Math.floor(m/60))+":"+pad(m%60);
function slotsFor(d){const h=HOURS[d.getDay()];if(!h)return[];const du=parseInt(SERVICES[svcSel.value][3]),now=new Date(),isToday=d.toDateString()===now.toDateString(),nm=now.getHours()*60+now.getMinutes()+30,o=[];
for(let m=h[0]*60;m+du<=h[1]*60;m+=30){if(isToday&&m<nm)continue;o.push(m)}return o}
function renderSlots(){const box=$("slots");selTime=null;if(!selDay){box.innerHTML='<span class="slotnote">No hay horarios disponibles.</span>';return}
const sl=slotsFor(selDay);box.innerHTML=sl.length?sl.map(m=>`<button type="button" class="chip" data-t="${m}" aria-pressed="false"><b>${hm(m)}</b></button>`).join(""):'<span class="slotnote">No quedan horarios para este día.</span>'}
function renderBooking(){const now=new Date();dayList=[];
for(let i=0;dayList.length<14&&i<40;i++){const d=new Date(now.getFullYear(),now.getMonth(),now.getDate()+i);if(slotsFor(d).length)dayList.push(d)}
selDay=dayList[0]||null;
const tn=now.toDateString(),tm=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1).toDateString();
$("days").innerHTML=dayList.map((d,i)=>{const t=d.toDateString(),top=t===tn?"Hoy":t===tm?"Mañana":d.toLocaleDateString("es-AR",{weekday:"short"}).replace(".","");
return `<button type="button" class="chip" data-d="${i}" aria-pressed="${i===0}"><small>${top}</small><b>${d.getDate()}</b><small>${d.toLocaleDateString("es-AR",{month:"short"}).replace(".","")}</small></button>`}).join("");
renderSlots()}
$("days").addEventListener("click",e=>{const b=e.target.closest("[data-d]");if(!b)return;selDay=dayList[+b.dataset.d];$("days").querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b));renderSlots()});
$("slots").addEventListener("click",e=>{const b=e.target.closest("[data-t]");if(!b)return;selTime=+b.dataset.t;$("slots").querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b))});
svcSel.onchange=renderBooking;
$("confirm").onclick=()=>{const n=$("fn").value.trim();
if(!n||!selDay||selTime===null){$("bmsg").innerHTML='<div class="ok">Escribe tu nombre y elige un día y un horario para continuar.</div>';return}
sendWA("Hola, quiero reservar un turno:\nServicio: "+SERVICES[svcSel.value][0]+"\nNombre: "+n+"\nDía: "+selDay.toLocaleDateString("es-AR",{weekday:"long",day:"numeric",month:"long"})+"\nHorario: "+hm(selTime)+" hs","bmsg")};
drawTabs();drawGrid();drawCart();

/* ---------- Escena 3D ---------- */
(function(){
const box=$("scene");
if(!window.THREE){return}
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const R=new THREE.WebGLRenderer({antialias:true,alpha:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));box.appendChild(R.domElement);
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(40,1,.1,50);C.position.set(0,0.3,8.5);
S.add(new THREE.AmbientLight(0xffffff,.7));
const dl=new THREE.DirectionalLight(0xffffff,.9);dl.position.set(3,5,6);S.add(dl);
const pl=new THREE.PointLight(0xffd9a0,1.2,20);pl.position.set(-4,1,4);S.add(pl);
// textura del poste
const cv=document.createElement("canvas");cv.width=cv.height=128;const x=cv.getContext("2d"),im=x.createImageData(128,128);
const col=[[197,34,44],[245,243,238],[44,95,166],[245,243,238]];
for(let j=0;j<128;j++)for(let i=0;i<128;i++){const c=col[Math.floor(((i+j)%128)/32)],k=(j*128+i)*4;im.data[k]=c[0];im.data[k+1]=c[1];im.data[k+2]=c[2];im.data[k+3]=255}
x.putImageData(im,0,0);
const tex=new THREE.CanvasTexture(cv);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(1,3);
const pole=new THREE.Group();
const glass=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,4,48),new THREE.MeshStandardMaterial({map:tex,roughness:.25,metalness:.1}));
pole.add(glass);
const brass=new THREE.MeshStandardMaterial({color:0xc79d5f,metalness:.9,roughness:.3});
[2.15,-2.15].forEach(y=>{const cap=new THREE.Mesh(new THREE.CylinderGeometry(.9,.9,.3,48),brass);cap.position.y=y;pole.add(cap)});
const top=new THREE.Mesh(new THREE.SphereGeometry(.45,32,16),brass);top.position.y=2.5;pole.add(top);
S.add(pole);
// productos en órbita
const orbit=new THREE.Group();S.add(orbit);
function mk(g,m){return new THREE.Mesh(g,new THREE.MeshStandardMaterial(m))}
const items=[];
const tin=new THREE.Group();tin.add(mk(new THREE.CylinderGeometry(.5,.5,.3,32),{color:0xc79d5f,metalness:.7,roughness:.4}));const lid=mk(new THREE.CylinderGeometry(.52,.52,.12,32),{color:0x9a7a42,metalness:.7,roughness:.4});lid.position.y=.2;tin.add(lid);items.push(tin);
const bot=new THREE.Group();bot.add(mk(new THREE.CylinderGeometry(.28,.28,.9,24),{color:0x2c5fa6,roughness:.3}));const cap=mk(new THREE.CylinderGeometry(.12,.12,.25,16),{color:0xc79d5f,metalness:.8,roughness:.3});cap.position.y=.55;bot.add(cap);items.push(bot);
const clip=new THREE.Group();clip.add(mk(new THREE.BoxGeometry(.5,1.1,.35),{color:0x20242e,metalness:.5,roughness:.4}));const head=mk(new THREE.BoxGeometry(.5,.2,.12),{color:0xcfd5e0,metalness:.9,roughness:.2});head.position.y=.65;clip.add(head);const btn=mk(new THREE.SphereGeometry(.07,12,8),{color:0xc5222c});btn.position.set(0,.15,.19);clip.add(btn);items.push(clip);
const tin2=tin.clone();tin2.scale.setScalar(.8);items.push(tin2);
const bot2=bot.clone();bot2.scale.setScalar(.8);items.push(bot2);
items.forEach((m,i)=>{m.userData.a=i/items.length*Math.PI*2;orbit.add(m)});
// interacción
let mx=0,my=0,sy=0;
box.addEventListener("pointermove",e=>{const r=box.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5});
addEventListener("scroll",()=>{sy=Math.min(scrollY/600,1)},{passive:true});
function size(){const w=box.clientWidth,h=box.clientHeight;R.setSize(w,h);C.aspect=w/h;C.position.z=w/h<1?11:8.5;C.updateProjectionMatrix()}
size();addEventListener("resize",size);
let t=0,vis=true;
new IntersectionObserver(en=>{vis=en[0].isIntersecting}).observe(box);
function loop(){requestAnimationFrame(loop);if(!vis)return;
if(!reduce){t+=.01;tex.offset.y-=.004;pole.rotation.y=t*.4}
const r=2.7;
items.forEach((m,i)=>{const a=m.userData.a+t*.6;m.position.set(Math.cos(a)*r,Math.sin(t*1.5+i)*.35+(i%2?.8:-.6),Math.sin(a)*r*.6);m.rotation.y=a+t;m.rotation.z=Math.sin(t+i)*.3});
orbit.rotation.x=.18;
C.position.x+=(mx*1.6-C.position.x)*.05;C.position.y+=(-my*1.2+.3+sy*1.2-C.position.y)*.05;C.lookAt(0,0,0);
R.render(S,C)}
loop();
})();

/* ---------- Antes y después + video real (aparecen solo si existen los archivos) ---------- */
(function(){
const sec=document.getElementById("corte"),ba=document.getElementById("ba"),vid=document.getElementById("cutVideo"),nav=document.getElementById("navcorte");
const show=el=>{el.hidden=false;sec.hidden=false;nav.hidden=false};
const A=new Image(),B=new Image();let ok=0;
const done=()=>{if(++ok===2){document.getElementById("baBefore").src=B.src;document.getElementById("baAfter").src=A.src;show(ba)}};
B.onload=done;A.onload=done;B.src="images/antes.jpg";A.src="images/despues.jpg";
document.getElementById("baRange").oninput=e=>ba.style.setProperty("--p",e.target.value+"%");
vid.addEventListener("loadedmetadata",()=>show(vid));
vid.src="images/corte.mp4#t=0.1";
})();
