const HG1 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
//document.getElementById('memb').innerHTML = JSON.stringify(Zaka);
console.log(Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]);
document.getElementById('M1a').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["HSMM"];
document.getElementById('M1b').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["IGCM"];
document.getElementById('M1c').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["KGYK"];
document.getElementById('M1d').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["KZMM"];
document.getElementById('M1e').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["KTSH"];
document.getElementById('M1f').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["SSKM"];
document.getElementById('M1g').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["SSMR"];
document.getElementById('M1h').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["STKK"];
document.getElementById('M1i').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["TKAK"];
document.getElementById('M1j').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["TKNN"];
document.getElementById('M1k').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["USSN"];
}).catch((error) => {
console.log(error);
});
};

const HG2 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
//document.getElementById('memb').innerHTML = JSON.stringify(Zaka);
console.log(Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]);
document.getElementById('M2a').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["HMHY"];
document.getElementById('M2b').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["KMMK"];
document.getElementById('M2c').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["KWHN"];
document.getElementById('M2d').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["KSKN"];
document.getElementById('M2e').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["MTKN"];
document.getElementById('M2f').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["MYMN"];
document.getElementById('M2g').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["NBAK"];
document.getElementById('M2h').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["TMSK"];
document.getElementById('M2i').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["WTMH"];
}).catch((error) => {
console.log(error);
});
};

const HG3 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
//document.getElementById('memb').innerHTML = JSON.stringify(Zaka);
console.log(Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]);
document.getElementById('M3a').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation3"]["KMMH"];
}).catch((error) => {
console.log(error);
});
};
