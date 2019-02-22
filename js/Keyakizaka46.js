const KG1 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
console.log(Object.values(Zaka)[0]["Keyakizaka46"]);
document.getElementById('M1a').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["HMH"];
document.getElementById('M1b').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["HAO"];
document.getElementById('M1c').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["HMY"];
document.getElementById('M1d').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["HYN"];
document.getElementById('M1e').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["IYU"];
document.getElementById('M1f').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["INK"];
document.getElementById('M1g').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["KYU"];
document.getElementById('M1h').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["KMM"];
document.getElementById('M1i').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["MAK"];
document.getElementById('M1j').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["NNK"];
document.getElementById('M1k').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["ONN"];
document.getElementById('M1l').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["ORK"];
document.getElementById('M1m').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["SFK"];
document.getElementById('M1n').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["SSR"];
document.getElementById('M1o').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["SMK"];
document.getElementById('M1p').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["SYK"];
document.getElementById('M1q').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["SMH"];
document.getElementById('M1r').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["SMY"];
document.getElementById('M1s').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["URN"];
document.getElementById('M1t').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["WRK"];
document.getElementById('M1u').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["WRS"];
document.getElementById('M1v').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["YNN"];
}).catch((error) => {
console.log(error);
});
};

const KG2 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
document.getElementById('M2a').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["FJK"];
document.getElementById('M2b').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["IRN"];
document.getElementById('M2c').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["MDR"];
document.getElementById('M2d').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["MTR"];
document.getElementById('M2e').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["MHK"];
document.getElementById('M2f').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["SKY"];
document.getElementById('M2g').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["TKY"];
document.getElementById('M2h').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["TMH"];
document.getElementById('M2i').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["TMT"];
}).catch((error) => {
console.log(error);
});
};
const KG3 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
document.getElementById('M3a').innerHTML = "";
}).catch((error) => {
console.log(error);
});
};
