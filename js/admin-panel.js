
const storeKey = "academiaHubData";
let adminData = loadData();

function saveAdmin(){ localStorage.setItem(storeKey, JSON.stringify(adminData)); renderAdmin(); }
function uid(prefix){ return prefix + "-" + Date.now().toString(36); }

$$("[data-tab]").forEach(btn=>btn.addEventListener("click",()=>{
  $$("[data-tab]").forEach(b=>b.classList.remove("active"));
  $$(".admin-section").forEach(s=>s.classList.remove("active"));
  btn.classList.add("active");
  $("#tab-"+btn.dataset.tab).classList.add("active");
}));

$("#resetData").onclick = ()=>{
  if(confirm("سيتم حذف كل التعديلات المحلية واستعادة البيانات الافتراضية. هل تريد المتابعة؟")){
    localStorage.removeItem(storeKey);
    location.reload();
  }
};

function itemRow(label, sub, onDelete){
  const div=document.createElement("div");
  div.className="admin-item";
  div.innerHTML=`<span><strong>${safe(label)}</strong><br><small class="muted">${safe(sub||"")}</small></span><button class="danger">حذف</button>`;
  div.querySelector("button").onclick=onDelete;
  return div;
}
function renderAdmin(){
  const services=$("#adminServices"); if(services){ services.innerHTML=""; adminData.services.forEach((s,i)=>services.appendChild(itemRow(s.title, s.items?.slice(0,3).join("، "), ()=>{adminData.services.splice(i,1);saveAdmin();}))); }
  const journals=$("#adminJournals"); if(journals){ journals.innerHTML=""; adminData.journals.slice(0,120).forEach((j,i)=>journals.appendChild(itemRow(j.name, `${j.country} - ${j.field} - ${j.issn||""}`, ()=>{adminData.journals.splice(i,1);saveAdmin();}))); }
  const experts=$("#adminExperts"); if(experts){ experts.innerHTML=""; adminData.experts.forEach((e,i)=>experts.appendChild(itemRow(e.name, `${e.spec} - ${e.country}`, ()=>{adminData.experts.splice(i,1);saveAdmin();}))); }
  const works=$("#adminWorks"); if(works){ works.innerHTML=""; adminData.works.forEach((w,i)=>works.appendChild(itemRow(w.title, `${w.type} - ${w.field}`, ()=>{adminData.works.splice(i,1);saveAdmin();}))); }
  const lib=$("#adminLibrary"); if(lib){ lib.innerHTML=""; adminData.library.forEach((l,i)=>lib.appendChild(itemRow(l.title, l.desc, ()=>{adminData.library.splice(i,1);saveAdmin();}))); }
  const noti=$("#adminNotifications"); if(noti){ noti.innerHTML=""; (adminData.notifications||[]).forEach((n,i)=>noti.appendChild(itemRow(n.title, `${n.type}: ${n.body}`, ()=>{adminData.notifications.splice(i,1);saveAdmin();}))); }
}
function dataFromForm(form){
  const o={}; new FormData(form).forEach((v,k)=>o[k]=v); return o;
}
$("#serviceForm")?.addEventListener("submit",e=>{
  e.preventDefault(); const o=dataFromForm(e.target);
  const items=o.items.split(/،|,/).map(x=>x.trim()).filter(Boolean);
  adminData.services.push({id:o.id||uid("service"), title:o.title, icon:o.icon||"fa-star", color:o.color||"#2563eb", image:o.image||img(o.title), desc:o.desc||"", items});
  e.target.reset(); saveAdmin();
});
$("#journalForm")?.addEventListener("submit",e=>{
  e.preventDefault(); adminData.journals.push(dataFromForm(e.target)); e.target.reset(); saveAdmin();
});
$("#expertForm")?.addEventListener("submit",e=>{
  e.preventDefault(); adminData.experts.push(dataFromForm(e.target)); e.target.reset(); saveAdmin();
});
$("#workForm")?.addEventListener("submit",e=>{
  e.preventDefault(); adminData.works.push(dataFromForm(e.target)); e.target.reset(); saveAdmin();
});
$("#libraryForm")?.addEventListener("submit",e=>{
  e.preventDefault(); adminData.library.push(dataFromForm(e.target)); e.target.reset(); saveAdmin();
});
$("#notificationForm")?.addEventListener("submit",e=>{
  e.preventDefault(); adminData.notifications = adminData.notifications || []; adminData.notifications.push(dataFromForm(e.target)); e.target.reset(); saveAdmin();
});
$("#saveVisual")?.addEventListener("click",()=>{
  adminData.visual={primary:$("#primaryColor").value,secondary:$("#secondaryColor").value,accent:$("#accentColor").value,hero:$("#heroMessage").value};
  saveAdmin(); alert("تم حفظ إعدادات الشكل محلياً.");
});
renderAdmin();
