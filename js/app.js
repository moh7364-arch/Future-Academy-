
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const img = q => `https://source.unsplash.com/800x520/?${encodeURIComponent(q)}`;

const DEFAULTS = {
  features:[
    {title:"واجهة عامة قبل التسجيل", icon:"fa-door-open", text:"العميل يشاهد المنصة والخدمات أولاً ثم يسجل عند طلب الخدمة."},
    {title:"نماذج طلب ذكية", icon:"fa-clipboard-question", text:"أسئلة مختلفة حسب الخدمة لتقليل المراسلات وتوضيح المتطلبات."},
    {title:"لوحة تحكم قابلة للتوسعة", icon:"fa-sliders", text:"إضافة وحذف وتعديل الأقسام والخدمات والألوان والخلفيات."},
    {title:"مكتبة وقوالب", icon:"fa-folder-open", text:"تنظيم القوالب والنماذج والأدلة في مكتبة يسهل إدارتها."},
    {title:"خريطة نشر علمي", icon:"fa-earth-americas", text:"بوابات ومجلات حسب الدولة والتخصص مع أرقام دولية وروابط."},
    {title:"تجربة بصرية حديثة", icon:"fa-wand-magic-sparkles", text:"حركات خفيفة وألوان متغيرة وبطاقات واضحة دون إرباك المستخدم."}
  ],
  specs:[
    {name:"الطب والعلوم الصحية", image:img("medical research laboratory"), branches:["طب بشري","طب أسنان","صيدلة","تمريض","صحة عامة","مختبرات","تغذية علاجية","وبائيات"]},
    {name:"الهندسة والتقنية", image:img("engineering technology"), branches:["مدنية","معمارية","كهربائية","ميكانيكية","برمجيات","ذكاء اصطناعي","أمن سيبراني","اتصالات"]},
    {name:"العلوم الطبيعية", image:img("science laboratory"), branches:["كيمياء","فيزياء","أحياء","رياضيات","إحصاء","بيئة","جيولوجيا","تقنية حيوية"]},
    {name:"العلوم الاجتماعية", image:img("students discussion"), branches:["علم اجتماع","علم نفس","علوم سياسية","إعلام","خدمة اجتماعية","علاقات دولية"]},
    {name:"الإنسانيات والتربية", image:img("library books"), branches:["لغة عربية","لغة إنجليزية","تاريخ","فلسفة","تربية","مناهج","دراسات إسلامية"]},
    {name:"الإدارة والاقتصاد", image:img("business analytics"), branches:["إدارة أعمال","محاسبة","تسويق","تمويل","اقتصاد","موارد بشرية","نظم معلومات"]},
    {name:"القانون", image:img("law justice books"), branches:["قانون عام","قانون خاص","جنائي","تجاري","دولي","إداري","تحكيم"]},
    {name:"الفنون والتصميم", image:img("design studio"), branches:["تصميم داخلي","جرافيك","فنون بصرية","إعلام رقمي","تصميم تجربة المستخدم"]}
  ],
  services:[
    {id:"thesis", title:"رسائل الماجستير والدكتوراه", icon:"fa-file-pen", color:"#2563eb", image:img("graduate thesis"), desc:"خدمات متكاملة من فكرة الرسالة حتى المناقشة.", items:["اقتراح عنوان بحثي","كتابة البروبوزل","خطة البحث","الإطار النظري","منهجية الدراسة","تحليل ومناقشة النتائج","التدقيق اللغوي","تنسيق APA/Vancouver","توفير مصادر حديثة","إشراف كامل حتى التسليم"]},
    {id:"memoirs", title:"مذكرات التخرج", icon:"fa-book", color:"#7c3aed", image:img("students graduation project"), desc:"مساندة عملية للطلبة في إنجاز مذكرات الليسانس والبكالوريوس.", items:["اختيار الموضوع","صياغة الإشكالية","إعداد الخطة","جمع المراجع","كتابة الفصول","تنسيق الجامعة","عرض المناقشة","ملخص عربي وإنجليزي"]},
    {id:"projects", title:"مشاريع التخرج", icon:"fa-diagram-project", color:"#0ea5e9", image:img("software project team"), desc:"أفكار وتنفيذ وتوثيق وعرض نهائي للمشاريع.", items:["اقتراح أفكار","تحليل المتطلبات","تصميم UML","تنفيذ واجهات","توثيق المشروع","اختبار المشروع","عرض PowerPoint","تحضير المناقشة"]},
    {id:"papers", title:"الأوراق البحثية والمقالات العلمية", icon:"fa-newspaper", color:"#f59e0b", image:img("academic paper writing"), desc:"صياغة أوراق علمية ومقالات محكمة وفق شروط النشر.", items:["اختيار العنوان","الملخص والكلمات المفتاحية","المقدمة والدراسات السابقة","المنهجية","النتائج","المناقشة","المراجع","التنسيق حسب المجلة"]},
    {id:"publishing", title:"النشر الدولي والمحلي", icon:"fa-globe", color:"#10b981", image:img("scientific journal publication"), desc:"دعم كامل لاختيار المجلة ومتابعة التحكيم والردود.", items:["اختيار المجلة المناسبة","فحص شروط المجلة","تجهيز قالب النشر","خطاب التغطية","متابعة التحكيم","الرد على المحكمين","إعادة التنسيق","اقتراح مجلات بديلة"]},
    {id:"translation", title:"الترجمة وفحص الاقتباس", icon:"fa-language", color:"#ec4899", image:img("translation documents"), desc:"ترجمة أكاديمية وتخفيض تشابه وتحرير لغوي.", items:["ترجمة عربي/إنجليزي","تحرير أكاديمي","فحص الاقتباس","إعادة الصياغة","تدقيق إملائي","تنسيق نهائي","ملخصات مترجمة"]},
    {id:"statistics", title:"التحليل الإحصائي", icon:"fa-chart-pie", color:"#14b8a6", image:img("statistics data dashboard"), desc:"تحليل بيانات كمي وكيفي مع تفسير أكاديمي.", items:["SPSS","AMOS","SmartPLS","R","Python","Excel","اختبارات الفرضيات","تحليل الاستبيانات","الجداول والأشكال","تفسير النتائج"]},
    {id:"programming", title:"البرمجة والتطبيقات", icon:"fa-code", color:"#6366f1", image:img("programming web app"), desc:"تنفيذ مواقع وأنظمة وتطبيقات ونماذج ذكاء اصطناعي.", items:["مواقع ويب","واجهات UI","أنظمة إدارة","تطبيقات موبايل","Python","MATLAB","لوحات بيانات","واجهات API","قواعد بيانات","توثيق الكود"]},
    {id:"experts", title:"الخبراء والاستشارات", icon:"fa-user-tie", color:"#0f172a", image:img("professor consultation"), desc:"ربط العميل بخبير مناسب حسب التخصص والمرحلة.", items:["استشارة منهجية","مراجعة خطة","تحكيم داخلي","توجيه بحثي","جلسات متابعة","مراجعة قبل المناقشة"]},
    {id:"portfolio", title:"الأعمال السابقة", icon:"fa-briefcase", color:"#ea580c", image:img("portfolio documents"), desc:"معرض قابل للتحديث للأعمال والنماذج والقوالب.", items:["أوراق بحثية","مقالات","عروض بوربوينت","نماذج رسائل","مذكرات تخرج","ملفات تدريبية"]},
    {id:"library", title:"المكتبة والقوالب", icon:"fa-layer-group", color:"#0891b2", image:img("academic templates"), desc:"قوالب وإرشادات جاهزة للتحميل والإدارة.", items:["LaTeX","Word","PowerPoint","قالب رسالة","قالب مذكرة","قالب مقال","قوائم تحقق","دليل APA/Vancouver"]}
  ],
  portals:[
    {country:"الجزائر", name:"بوابة المجلات العلمية الجزائرية ASJP", icon:"fa-building-columns", url:"https://www.asjp.cerist.dz"},
    {country:"العراق", name:"المجلات الأكاديمية العراقية", icon:"fa-book-journal-whills", url:"#"},
    {country:"الأردن", name:"بوابات المجلات الأردنية", icon:"fa-scroll", url:"#"},
    {country:"ليبيا", name:"بوابات المجلات الليبية", icon:"fa-landmark", url:"#"},
    {country:"المغرب", name:"بوابات المجلات المغربية", icon:"fa-mosque", url:"#"}
  ],
  journals:[],
  experts:[],
  works:[],
  library:[]
};

const countries=["الجزائر","العراق","الأردن","ليبيا","المغرب"];
const fields=["الطب","الهندسة","القانون","الإدارة","التربية","العلوم الاجتماعية"];
for(const c of countries){ for(const f of fields){ for(let i=1;i<=5;i++){ DEFAULTS.journals.push({country:c, field:f, name:`مجلة ${f} ${c} المحكمة ${i}`, issn:`ISSN ${2000+i}-${3000+i}`, url:"#", logo:"fa-book-open-reader"}); } } }
const expertCountries=["الجزائر","السعودية","مصر","الأردن","المغرب","تركيا","كندا","ماليزيا"];
for(const spec of DEFAULTS.specs){ for(let i=1;i<=6;i++){ DEFAULTS.experts.push({name:`خبير ${spec.name} ${i}`, spec:spec.name, country:expertCountries[(i+spec.name.length)%expertCountries.length], rate:(4.5+i/10).toFixed(1), projects:20+i*7}); } }
["ورقة بحثية","مقال علمي","عرض بوربوينت","رسالة ماجستير","مذكرة تخرج","مشروع تخرج"].forEach((t,idx)=>{for(let i=1;i<=5;i++)DEFAULTS.works.push({type:t,title:`نموذج ${t} رقم ${i}`, field:fields[(i+idx)%fields.length], note:"ملف تجريبي قابل للاستبدال من لوحة المشرف."})});
["قالب LaTeX رسالة","قالب Word مذكرة","قالب مقال علمي","قالب عرض مناقشة","قائمة تحقق منهجية","دليل توثيق APA","دليل Vancouver","قالب مشروع تخرج"].forEach((t,i)=>DEFAULTS.library.push({title:t, icon:["fa-file-lines","fa-file-word","fa-newspaper","fa-file-powerpoint","fa-list-check","fa-quote-left","fa-book","fa-code"][i], desc:"عنصر مكتبة قابل للتحديث والربط بملف تحميل من لوحة المشرف.", url:"#"}));

function loadData(){
  const saved = JSON.parse(localStorage.getItem("academiaHubData")||"{}");
  return {...DEFAULTS, ...saved,
    features:saved.features||DEFAULTS.features, specs:saved.specs||DEFAULTS.specs, services:saved.services||DEFAULTS.services,
    portals:saved.portals||DEFAULTS.portals, journals:saved.journals||DEFAULTS.journals, experts:saved.experts||DEFAULTS.experts,
    works:saved.works||DEFAULTS.works, library:saved.library||DEFAULTS.library
  };
}
let DATA = loadData();

function safe(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}

function render(){
  if($("#railLinks")) $("#railLinks").innerHTML = DATA.services.map(s=>`<a class="rail-link" href="#services" onclick="filterServices('${s.id}')"><i class="fa-solid ${s.icon}"></i>${safe(s.title)}</a>`).join("");
  if($("#featuresGrid")) $("#featuresGrid").innerHTML = DATA.features.map(f=>`<article class="feature-card reveal"><div class="feature-icon"><i class="fa-solid ${f.icon}"></i></div><h3>${safe(f.title)}</h3><p>${safe(f.text)}</p></article>`).join("");
  if($("#serviceFilter")) $("#serviceFilter").innerHTML = `<button class="filter-btn active" data-filter="all">الكل</button>`+DATA.services.map(s=>`<button class="filter-btn" data-filter="${s.id}">${safe(s.title)}</button>`).join("");
  if($("#servicesGrid")) $("#servicesGrid").innerHTML = DATA.services.map(s=>`<article class="service-card reveal" data-service="${s.id}" style="--card-color:${s.color}"><img src="${s.image}" alt="${safe(s.title)}"><div class="service-icon" style="background:${s.color}"><i class="fa-solid ${s.icon}"></i></div><h3>${safe(s.title)}</h3><p>${safe(s.desc)}</p><div class="chips">${s.items.slice(0,8).map(x=>`<span class="chip">${safe(x)}</span>`).join("")}</div><button class="btn primary" onclick="openOrderModal('${s.id}')">طلب هذه الخدمة</button></article>`).join("");
  if($("#specGrid")) $("#specGrid").innerHTML = DATA.specs.map(s=>`<article class="spec-card reveal"><img src="${s.image}" alt="${safe(s.name)}"><h3>${safe(s.name)}</h3><div class="chips">${s.branches.map(b=>`<span class="chip">${safe(b)}</span>`).join("")}</div></article>`).join("");
  if($("#portalRow")) $("#portalRow").innerHTML = DATA.portals.map(p=>`<a class="portal-card reveal" href="${p.url}" target="_blank"><i class="fa-solid ${p.icon}"></i>${safe(p.country)}<small>${safe(p.name)}</small></a>`).join("");
  if($("#journalCountry")){
    $("#journalCountry").innerHTML = [...new Set(DATA.journals.map(j=>j.country))].map(c=>`<option>${safe(c)}</option>`).join("");
    $("#journalField").innerHTML = [...new Set(DATA.journals.map(j=>j.field))].map(c=>`<option>${safe(c)}</option>`).join("");
    $("#journalCountry").onchange=renderJournals; $("#journalField").onchange=renderJournals; renderJournals();
  }
  if($("#expertsGrid")) $("#expertsGrid").innerHTML = DATA.experts.slice(0,48).map(e=>`<article class="expert-card reveal"><div class="expert-avatar"><i class="fa-solid fa-user-tie"></i></div><h3>${safe(e.name)}</h3><p>${safe(e.spec)} - ${safe(e.country)}</p><b><i class="fa-solid fa-star"></i> ${safe(e.rate)}</b><p>${safe(e.projects)} مشروع واستشارة</p></article>`).join("");
  if($("#worksGrid")) $("#worksGrid").innerHTML = DATA.works.slice(0,36).map(w=>`<article class="work-card reveal"><span class="work-type">${safe(w.type)}</span><h3>${safe(w.title)}</h3><p>${safe(w.field)}</p><p>${safe(w.note)}</p><button class="btn ghost" onclick="openOrderModal()">طلب مشابه</button></article>`).join("");
  if($("#libraryGrid")) $("#libraryGrid").innerHTML = DATA.library.map(l=>`<article class="library-card reveal"><div class="library-icon"><i class="fa-solid ${l.icon}"></i></div><div><h3>${safe(l.title)}</h3><p>${safe(l.desc)}</p><a class="btn ghost" href="${l.url}" target="_blank">عرض / تحميل</a></div></article>`).join("");
  if($("#orderSection")) $("#orderSection").innerHTML = DATA.services.map(s=>`<option value="${s.id}">${safe(s.title)}</option>`).join("");
  if($("#orderSpec")) $("#orderSpec").innerHTML = DATA.specs.map(s=>`<option>${safe(s.name)}</option>`).join("");
  bindFilters(); updateOrderServices();
  revealNow();
}
function renderJournals(){
  const c=$("#journalCountry")?.value, f=$("#journalField")?.value;
  if(!$("#journalGrid")) return;
  $("#journalGrid").innerHTML = DATA.journals.filter(j=>j.country===c&&j.field===f).slice(0,15).map(j=>`<article class="journal-card reveal"><div class="journal-logo"><i class="fa-solid ${j.logo||'fa-book'}"></i></div><h3>${safe(j.name)}</h3><small>${safe(j.issn)}</small><p>${safe(j.country)} - ${safe(j.field)}</p><a href="${j.url||'#'}" target="_blank" class="btn ghost">زيارة المجلة</a></article>`).join("");
  revealNow();
}
function bindFilters(){
  $$("[data-filter]").forEach(b=>b.onclick=()=>filterServices(b.dataset.filter));
  $("#orderSection") && ($("#orderSection").onchange=updateOrderServices);
}
function filterServices(id){
  $$("[data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter===id));
  if(id==="all") $$("[data-service]").forEach(c=>c.style.display="block");
  else $$("[data-service]").forEach(c=>c.style.display=c.dataset.service===id?"block":"none");
}
function updateOrderServices(){
  const section=$("#orderSection")?.value || DATA.services[0].id;
  const service=DATA.services.find(s=>s.id===section) || DATA.services[0];
  $("#orderService").innerHTML = service.items.map(x=>`<option>${safe(x)}</option>`).join("");
  const questions = {
    thesis:["المرحلة العلمية","عدد الصفحات المتوقع","نظام التوثيق المطلوب","هل توجد خطة معتمدة؟"],
    publishing:["نوع النشر المطلوب","الدولة أو قاعدة البيانات","هل المقال مكتمل؟","نسبة الاقتباس الحالية"],
    statistics:["البرنامج المفضل","حجم العينة","نوع البيانات","عدد الفرضيات"],
    programming:["نوع النظام","التقنيات المفضلة","هل توجد واجهات؟","موعد التسليم"],
    translation:["اللغة المصدر","اللغة الهدف","عدد الكلمات","هل تحتاج تحريراً أكاديمياً؟"]
  };
  const qs = questions[section] || ["الموعد النهائي","الجامعة أو الجهة","الملفات المتوفرة","ملاحظات خاصة"];
  $("#dynamicQuestions").innerHTML = qs.map(q=>`<div class="question-box"><label>${safe(q)}</label><input placeholder="${safe(q)}"></div>`).join("");
}
function openOrderModal(section){
  $("#orderModal").classList.add("show");
  if(section){ $("#orderSection").value=section; updateOrderServices(); }
}
function closeOrderModal(){ $("#orderModal").classList.remove("show"); }
window.openOrderModal=openOrderModal; window.closeOrderModal=closeOrderModal; window.filterServices=filterServices;

$("#orderForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const msg = buildOrderMessage();
  const mail = `mailto:admin@example.com?subject=${encodeURIComponent("طلب خدمة جديد من AcademiaHub")}&body=${encodeURIComponent(msg)}`;
  window.location.href = mail;
});
function buildOrderMessage(){
  return `طلب خدمة جديد
الاسم: ${$("#clientName").value}
البريد: ${$("#clientEmail").value}
واتساب: ${$("#clientPhone").value}
القسم: ${$("#orderSection").selectedOptions[0].text}
الخدمة: ${$("#orderService").value}
التخصص: ${$("#orderSpec").value}
العنوان: ${$("#orderTitle").value}
التفاصيل: ${$("#orderDetails").value}`;
}
$("#whatsappLink")?.addEventListener("click",e=>{
  e.currentTarget.href = "https://wa.me/?text="+encodeURIComponent(buildOrderMessage());
});
$("#mobileToggle")?.addEventListener("click",()=>$(".top-nav").classList.toggle("open"));
function revealNow(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
  $$(".reveal").forEach(x=>io.observe(x));
}
render();
