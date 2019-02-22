const KG1 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
//document.getElementById('memb').innerHTML = JSON.stringify(Zaka);
console.log(Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]);
document.getElementById('M1a').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]["KMM"];
document.getElementById('M2b').innerHTML = Object.values(Zaka)[0]["Keyakizaka46"]["Generation2"]["FJK"];
}).catch((error) => {
console.log(error);
});
};
