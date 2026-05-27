
const STORAGE_KEY = "dailyDhikrPacksAdmin";

const DEFAULT_PACKS = {
  "beforeSleep": {
    "name": "Before Sleep",
    "desc": "3 simple bedtime duas",
    "steps": [
      {
        "title": "Ayat ul Kursi",
        "target": 1,
        "arabic": "اللّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
        "note": "Recite 1 time"
      },
      {
        "title": "Astaghfirullah",
        "target": 1,
        "arabic": "أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
        "note": "Recite 1 time"
      },
      {
        "title": "Allahumma Bismika",
        "target": 1,
        "arabic": "اللّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
        "note": "Recite 1 time"
      }
    ]
  },
  "evilEye": {
    "name": "Dua for Evil Eye",
    "desc": "Protection pack with Durood and Surahs",
    "steps": [
      {
        "title": "Durood e Pak",
        "target": 3,
        "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        "note": "Recite 3 times"
      },
      {
        "title": "Surah Al-Fatiha",
        "target": 1,
        "arabic": "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ۝ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ۝ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ۝ مَـٰلِكِ يَوْمِ ٱلدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ۝ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
        "note": "Recite 1 time"
      },
      {
        "title": "Surah Ikhlas",
        "target": 1,
        "arabic": "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        "note": "Recite 1 time"
      },
      {
        "title": "Surah An-Naas",
        "target": 1,
        "arabic": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
        "note": "Recite 1 time"
      },
      {
        "title": "Surah Al-Falaq",
        "target": 1,
        "arabic": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        "note": "Recite 1 time"
      },
      {
        "title": "Dua for Evil Eye",
        "target": 1,
        "arabic": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
        "note": "Recite 1 time"
      },
      {
        "title": "Durood e Pak",
        "target": 3,
        "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        "note": "Recite 3 times at the end"
      }
    ]
  }
};
const PACK_SOURCE_URL = "/api/packs";
const COUNTER_DUAS_URL = "/api/counter-duas";

let packs = {};
let activeKey = "beforeSleep";
let counterDuas = [];
let activeCounterIndex = 0;

const packList = document.getElementById("packList");
const stepList = document.getElementById("stepList");
const packName = document.getElementById("packName");
const packDesc = document.getElementById("packDesc");
const codeBox = document.getElementById("codeBox");
const preview = document.getElementById("preview");
const toast = document.getElementById("toast");
const counterDuaList = document.getElementById("counterDuaList");
const counterTitle = document.getElementById("counterTitle");
const counterArabic = document.getElementById("counterArabic");
const counterMeaning = document.getElementById("counterMeaning");
const counterLimit = document.getElementById("counterLimit");
const counterNote = document.getElementById("counterNote");
const counterPreview = document.getElementById("counterPreview");

function slugify(text){
  const base = String(text || "pack").toLowerCase().trim()
    .replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");
  let key = base || "pack";
  let i = 2;
  while(packs[key]) key = base + "_" + i++;
  return key;
}

async function init(){
  packs = await loadPacks();
  counterDuas = await loadCounterDuas();
  activeKey = Object.keys(packs)[0] || "beforeSleep";
  renderAll();
  renderCounterDuas();
}

async function loadPacks(){
  try{
    const res = await fetch(PACK_SOURCE_URL, {cache:"no-store"});
    if(res.ok){
      const data = await res.json();
      if(data && typeof data === "object") return data;
    }
  }catch(e){
    console.warn("Live packs could not be loaded. Using backup packs.", e);
  }
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if(saved && typeof saved === "object") return saved;
  }catch(e){}
  return structuredClone(DEFAULT_PACKS);
}

function savePacks(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(packs));
  renderCode();
}

async function savePacksLive(){
  savePacks();
  await saveLivePacks();
}

async function getAdminPassword(){
  let password = sessionStorage.getItem("dhikrAdminPassword") || "";
  if(!password){
    password = prompt("Enter admin password");
    if(!password) throw new Error("Password required");
    sessionStorage.setItem("dhikrAdminPassword", password);
  }
  return password;
}

async function saveLivePacks(){
  const password = await getAdminPassword();
  const res = await fetch("/api/packs", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({password, packs})
  });
  const data = await res.json().catch(()=>({}));
  if(!res.ok){
    if(res.status === 401 || res.status === 403) sessionStorage.removeItem("dhikrAdminPassword");
    throw new Error(data.error || "Live save failed");
  }
  showToast("Saved to Vercel Blob");
  return data;
}

function renderPacks(){
  packList.innerHTML = "";
  Object.entries(packs).forEach(([key, pack]) => {
    const div = document.createElement("div");
    div.className = "pack-item" + (key === activeKey ? " active" : "");
    div.innerHTML = `
      <div class="pack-title">${escapeHtml(pack.name || key)}</div>
      <div class="pack-meta">${(pack.steps || []).length} steps • ${escapeHtml(pack.desc || "No description")}</div>
    `;
    div.onclick = () => {
      activeKey = key;
      renderAll();
    };
    packList.appendChild(div);
  });
}

function renderEditor(){
  const pack = packs[activeKey];
  if(!pack) return;
  packName.value = pack.name || "";
  packDesc.value = pack.desc || "";
  renderSteps();
  renderPreview();
}

function renderSteps(){
  const pack = packs[activeKey];
  stepList.innerHTML = "";
  (pack.steps || []).forEach((step, index) => {
    const div = document.createElement("div");
    div.className = "step";
    div.innerHTML = `
      <div class="step-top">
        <div class="step-title">Step ${index + 1}: ${escapeHtml(step.title || "Untitled")}</div>
        <div class="row">
          <button class="btn" onclick="moveStep(${index}, -1)">↑</button>
          <button class="btn" onclick="moveStep(${index}, 1)">↓</button>
          <button class="btn danger" onclick="deleteStep(${index})">Delete</button>
        </div>
      </div>
      <div class="field"><label>Title</label><input value="${escapeAttr(step.title || "")}" oninput="updateStep(${index}, 'title', this.value)"></div>
      <div class="field"><label>Times</label><input type="number" min="1" value="${Number(step.target) || 1}" oninput="updateStep(${index}, 'target', this.value)"></div>
      <div class="field"><label>Arabic / Dua Text</label><textarea class="arabic" oninput="updateStep(${index}, 'arabic', this.value)">${escapeHtml(step.arabic || "")}</textarea></div>
      <div class="field"><label>Note</label><input value="${escapeAttr(step.note || "")}" oninput="updateStep(${index}, 'note', this.value)"></div>
      <div class="step-ar">${escapeHtml(step.arabic || "")}</div>
      <div class="step-note">${escapeHtml(step.note || "")}</div>
    `;
    stepList.appendChild(div);
  });
}

function renderPreview(){
  const pack = packs[activeKey];
  const step = (pack.steps || [])[0];
  if(!step){
    preview.innerHTML = `<div class="preview-card"><h3>No steps yet</h3><p class="small">Add your first dua.</p></div>`;
    return;
  }
  preview.innerHTML = `
    <div class="preview-card">
      <h3>${escapeHtml(pack.name || "Pack")}</h3>
      <div class="small">Step 1 of ${(pack.steps || []).length} • ${Number(step.target) || 1} time(s)</div>
      <div class="preview-ar">${escapeHtml(step.arabic || "")}</div>
      <b>${escapeHtml(step.title || "")}</b>
      <p class="small">${escapeHtml(step.note || "")}</p>
    </div>
  `;
}

function renderCode(){
  codeBox.textContent = "const DHIKR_PACKS = " + JSON.stringify(packs, null, 2) + ";";
}

function renderAll(){
  renderPacks();
  renderEditor();
  renderCode();
}

async function savePackFromInputs(){
  const pack = packs[activeKey];
  if(!pack) return;
  pack.name = packName.value.trim() || "Untitled Pack";
  pack.desc = packDesc.value.trim();
  savePacks();
  renderAll();
  try{
    await savePacksLive();
    showToast("Saved to Vercel Blob. Open Daily Dhikr to check.");
  }catch(error){
    showToast(error.message || "Live save failed");
  }
}

function addPack(){
  const name = prompt("Pack name?");
  if(!name) return;
  const key = slugify(name);
  packs[key] = {name, desc:"", steps:[]};
  activeKey = key;
  savePacks();
  renderAll();
  showToast("New pack created");
}

async function deletePack(){
  const keys = Object.keys(packs);
  if(keys.length <= 1){
    showToast("Keep at least one pack");
    return;
  }
  const deletingKey = activeKey;
  if(!confirm("Delete this pack from admin and live Daily Dhikr?")) return;

  delete packs[deletingKey];
  activeKey = Object.keys(packs)[0];
  savePacks();
  renderAll();

  try{
    await savePacksLive();
    showToast("Pack deleted from Vercel Blob and live Daily Dhikr");
  }catch(error){
    showToast(error.message || "Delete saved here, live update failed");
  }
}

function addStep(){
  const pack = packs[activeKey];
  pack.steps = pack.steps || [];
  pack.steps.push({title:"New Dua", target:1, arabic:"", note:"Recite 1 time"});
  savePacks();
  renderAll();
  showToast("Dua added");
}

function updateStep(index, field, value){
  const step = packs[activeKey].steps[index];
  if(!step) return;
  step[field] = field === "target" ? Math.max(1, Number(value) || 1) : value;
  savePacks();
  renderPacks();
  renderPreview();
  renderCode();
}

function deleteStep(index){
  if(!confirm("Delete this dua step?")) return;
  packs[activeKey].steps.splice(index,1);
  savePacks();
  renderAll();
}

function moveStep(index, dir){
  const steps = packs[activeKey].steps;
  const newIndex = index + dir;
  if(newIndex < 0 || newIndex >= steps.length) return;
  [steps[index], steps[newIndex]] = [steps[newIndex], steps[index]];
  savePacks();
  renderAll();
}


async function loadCounterDuas(){
  try{
    const res = await fetch(COUNTER_DUAS_URL, {cache:"no-store"});
    if(res.ok){
      const data = await res.json();
      const list = Array.isArray(data) ? data : (Array.isArray(data.duas) ? data.duas : []);
      if(list.length) return list;
    }
  }catch(e){ console.warn("Counter duas could not be loaded", e); }
  return [
    {id:"durood_shareef", title:"Durood Shareef", arabic:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ", meaning:"Send blessings upon Prophet Muhammad ﷺ", limit:100, note:"Recite 100 times"}
  ];
}

function renderCounterDuas(updateEditor = true){
  if(!counterDuaList) return;
  counterDuaList.innerHTML = "";
  if(!counterDuas.length){
    counterDuas.push({id:"dua_" + Date.now(), title:"", arabic:"", meaning:"", limit:100, note:""});
  }
  if(activeCounterIndex < 0 || activeCounterIndex >= counterDuas.length) activeCounterIndex = 0;

  counterDuas.forEach((dua,index)=>{
    const div = document.createElement("div");
    div.className = "pack-item" + (index === activeCounterIndex ? " active" : "");
    div.innerHTML = `
      <div class="pack-title">${escapeHtml(dua.title || "Untitled Dua")}</div>
      <div class="pack-meta">${Number(dua.limit) || 100} recitations • ${escapeHtml(dua.meaning || dua.note || "No meaning added")}</div>
    `;
    div.onclick = () => {
      activeCounterIndex = index;
      renderCounterDuas();
      renderCounterEditor();
    };
    counterDuaList.appendChild(div);
  });
  if(updateEditor) renderCounterEditor();
}

function renderCounterEditor(){
  const dua = counterDuas[activeCounterIndex];
  if(!dua) return;
  counterTitle.value = dua.title || "";
  counterArabic.value = dua.arabic || "";
  counterMeaning.value = dua.meaning || "";
  if(counterLimit) counterLimit.value = Number(dua.limit) || 100;
  counterNote.value = dua.note || ("Recite " + (Number(dua.limit) || 100) + " times");
  renderCounterPreview();
}

function renderCounterPreview(){
  const dua = counterDuas[activeCounterIndex];
  if(!dua){
    counterPreview.innerHTML = `<div class="preview-card"><h3>No dua yet</h3><p class="small">Add your first My Dua.</p></div>`;
    return;
  }
  counterPreview.innerHTML = `
    <div class="preview-card">
      <h3>${escapeHtml(dua.title || "Untitled Dua")}</h3>
      <div class="small">${Number(dua.limit) || 100} recitations</div>
      <div class="preview-ar">${escapeHtml(dua.arabic || "")}</div>
      <b>${escapeHtml(dua.meaning || "")}</b>
      <p class="small">${escapeHtml(dua.note || "Recite 100 times")}</p>
    </div>
  `;
}

function syncCounterEditor(){
  const dua = counterDuas[activeCounterIndex];
  if(!dua) return;
  dua.title = counterTitle.value;
  dua.arabic = counterArabic.value;
  dua.meaning = counterMeaning.value;
  dua.limit = Math.max(1, Number(counterLimit && counterLimit.value) || Number(dua.limit) || 100);
  dua.note = counterNote.value;
  dua.id = dua.id || ("dua_" + Date.now());
}

function addCounterDua(){
  syncCounterEditor();
  counterDuas.push({id:"dua_" + Date.now(), title:"", arabic:"", meaning:"", limit:100, note:""});
  activeCounterIndex = counterDuas.length - 1;
  renderCounterDuas();
  showToast("Counter dua added");
}

async function deleteCounterDua(){
  if(counterDuas.length <= 1){ showToast("Keep at least one counter dua"); return; }
  if(!confirm("Delete this counter dua from admin and live My Dua page?")) return;
  counterDuas.splice(activeCounterIndex,1);
  activeCounterIndex = Math.max(0, activeCounterIndex - 1);
  renderCounterDuas();
  try{
    await saveCounterDuasLive();
    showToast("Counter dua deleted from Vercel Blob and live My Dua");
  }catch(error){
    showToast(error.message || "Delete saved here, live update failed");
  }
}

function cleanCounterDuasForSave(){
  return counterDuas.map((dua, index) => ({
    id: dua.id || ("dua_" + Date.now() + "_" + index),
    title: String(dua.title || "Untitled Dua"),
    arabic: String(dua.arabic || ""),
    meaning: String(dua.meaning || ""),
    limit: Math.max(1, Number(dua.limit) || 100),
    note: String(dua.note || ("Recite " + (Math.max(1, Number(dua.limit) || 100)) + " times"))
  }));
}

async function saveCounterDuasLive(){
  try{
    if(counterDuas[activeCounterIndex]) syncCounterEditor();
    renderCounterDuas();
    const password = await getAdminPassword();
    const res = await fetch(COUNTER_DUAS_URL, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({password, duas: cleanCounterDuasForSave()})
    });
    const data = await res.json().catch(()=>({}));
    if(!res.ok){
      if(res.status === 401 || res.status === 403) sessionStorage.removeItem("dhikrAdminPassword");
      throw new Error(data.error || "Counter duas save failed");
    }
    counterDuas = data.duas || counterDuas;
    activeCounterIndex = Math.min(activeCounterIndex, counterDuas.length - 1);
    renderCounterDuas();
    showToast("My Dua Counter saved to Vercel Blob");
  }catch(err){
    alert(err.message || "Save failed");
  }
}

function cleanPacksForExport(){
  const cleaned = {};
  Object.entries(packs).forEach(([key, pack]) => {
    const steps = Array.isArray(pack.steps) ? pack.steps.map(step => ({
      title: String(step.title || "New Dua"),
      target: Math.max(1, Number(step.target) || 1),
      arabic: String(step.arabic || ""),
      note: String(step.note || "")
    })) : [];
    cleaned[key] = {
      name: String(pack.name || key),
      desc: String(pack.desc || ""),
      steps
    };
  });
  return cleaned;
}

function downloadJSON(){
  const pack = packs[activeKey];
  if(pack){ pack.name = packName.value.trim() || "Untitled Pack"; pack.desc = packDesc.value.trim(); savePacks(); }
  const exportData = cleanPacksForExport();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(exportData));
  const blob = new Blob([JSON.stringify(exportData, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dhikr-packs.json";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Backup JSON downloaded");
}

function copyCode(){
  navigator.clipboard.writeText(codeBox.textContent).then(() => showToast("Code copied"));
}

function exportCode(){
  renderCode();
  codeBox.scrollIntoView({behavior:"smooth", block:"center"});
  showToast("Export code is ready");
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function escapeAttr(s){return escapeHtml(s).replace(/`/g,"&#096;")}
function showToast(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove("show"),1800)}

document.getElementById("savePackBtn").onclick = savePackFromInputs;
document.getElementById("newPackBtn").onclick = addPack;
document.getElementById("deletePackBtn").onclick = deletePack;
document.getElementById("addStepBtn").onclick = addStep;
document.getElementById("downloadBtn").onclick = downloadJSON;
document.getElementById("copyCodeBtn").onclick = copyCode;
document.getElementById("exportBtn").onclick = exportCode;
document.getElementById("addCounterDuaBtn").onclick = addCounterDua;
document.getElementById("deleteCounterDuaBtn").onclick = deleteCounterDua;
document.getElementById("saveCounterDuasBtn").onclick = saveCounterDuasLive;
[counterTitle,counterArabic,counterMeaning,counterLimit,counterNote].forEach(el=>{ if(el) el.addEventListener("input",()=>{ syncCounterEditor(); renderCounterDuas(false); renderCounterPreview(); }); });

function switchAdminPanel(panel){
  const dailyActive = panel === "daily";
  document.getElementById("dailyAdminTab").classList.toggle("active", dailyActive);
  document.getElementById("myDuaAdminTab").classList.toggle("active", !dailyActive);
  document.getElementById("dailyAdminPanel").classList.toggle("active", dailyActive);
  document.getElementById("myDuaAdminPanel").classList.toggle("active", !dailyActive);
  localStorage.setItem("adminActivePanel", panel);
}
document.getElementById("dailyAdminTab").onclick = () => switchAdminPanel("daily");
document.getElementById("myDuaAdminTab").onclick = () => switchAdminPanel("mydua");
const savedAdminPanel = localStorage.getItem("adminActivePanel");
if(savedAdminPanel === "mydua") switchAdminPanel("mydua");

init();
