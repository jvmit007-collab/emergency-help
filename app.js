const contacts=[
{name:"Police",phone:"112",icon:"👮",description:"Police and immediate public safety assistance."},
{name:"Ambulance",phone:"108",icon:"🚑",description:"Medical emergency and ambulance assistance."},
{name:"Fire Brigade",phone:"101",icon:"🚒",description:"Fire and rescue emergencies."},
{name:"National Emergency",phone:"112",icon:"📞",description:"National emergency response number."},
{name:"Women Helpline",phone:"181",icon:"👩",description:"Women helpline and support service."}
];
const cards=document.getElementById("contactCards");
contacts.forEach(c=>cards.innerHTML+=`<article class="card"><div class="icon">${c.icon}</div><h3>${c.name}</h3><p>${c.description}</p><a class="btn" href="tel:${c.phone}">📞 Call ${c.phone}</a></article>`);
document.getElementById("helpForm").addEventListener("submit",e=>{
 e.preventDefault();
 const data={name:name.value,phone:phone.value,location:location.value,type:type.value,details:details.value,date:new Date().toLocaleString()};
 localStorage.setItem("emergencyHelpRequest",JSON.stringify(data));
 success.hidden=false; success.textContent="✅ Your request has been recorded on this device. For an immediate emergency, call the appropriate emergency number directly.";
 e.target.reset();
});