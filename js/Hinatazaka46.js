const HG1 = () => {
fetch(url).then((res) => {
  return res.json();
  var Zaka = JSON.stringify(url);
}).then((Zaka) => {
//document.getElementById('memb').innerHTML = JSON.stringify(Zaka);
console.log(Object.values(Zaka)[0]["Keyakizaka46"]["Generation1"]);
document.getElementById('M3a').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation1"]["HSMM"];
document.getElementById('M3b').innerHTML = Object.values(Zaka)[0]["Hinatazaka46"]["Generation2"]["HMHY"];
}).catch((error) => {
console.log(error);
});
}
