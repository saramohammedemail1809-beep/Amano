let currentLang="ar", contacts=[];

const emergencyData={
  "Saudi Arabia": {Police:"999",Hospitals:"997",Embassy:"Local",Transport:"9200 123 456"},
  "Egypt": {Police:"122",Hospitals:"123",Embassy:"Local",Transport:"165"},
  "USA": {Police:"911",Hospitals:"911",Embassy:"1-202-555-0123",Transport:"311"}
};

function imSafe() {
  alert(currentLang==="ar"?"تم الإرسال بنجاح ✅":"Sent successfully ✅");
}

function showContacts() { document.getElementById('contactsPage').style.display='block'; }
function showResources() { document.getElementById('resourcesPage').style.display='block'; }
function hidePage(id) { document.getElementById(id).style.display='none'; }
function toggleOptions() { const m=document.getElementById('optionsMenu'); m.style.display=m.style.display==='block'?'none':'block'; }

function addContact() {
  const n=document.getElementById('contactName').value, p=document.getElementById('contactPhone').value;
  if(n && p){ contacts.push({name:n, phone:p}); updateContactsList(); document.getElementById('contactName').value=''; document.getElementById('contactPhone').value=''; }
}

function updateContactsList() {
  const l=document.getElementById('contactsList'); l.innerHTML='';
  contacts.forEach(c=>{ const li=document.createElement('li'); li.textContent=`${c.name} - ${c.phone}`; l.appendChild(li); });
}

function showEmergencyNumbers() {
  const c=document.getElementById('countrySelect').value, cont=document.getElementById('emergencyNumbers');
  cont.innerHTML='';
  if(c && emergencyData[c]){
    const d=emergencyData[c];
    for