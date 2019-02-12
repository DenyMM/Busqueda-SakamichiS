

const url = "https://raw.githubusercontent.com/DenyMM/Busqueda-SakamichiS/master/webcrudbde1-Sakamichi-export.json"; // site that doesn’t send Access-Control-*
fetch(url)
.then(response => response.text())
.then(Sakamichi => document.getElementById('nombre').innerHTML = (Sakamichi))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
/*
fetch(SakaAPI).then((res) => {
  return res.json();
}).then((Sakamichi) => {
  // Imprime Sedes
  document.getElementById('nombre').innerHTML = Object.keys(Sakamichi.Keyakizaka46)[0];
}).catch((error) => {
  console.log(error);
});
/*
fetch('https://raw.githubusercontent.com/DenyMM/Busqueda-SakamichiS/master/webcrudbde1-Sakamichi-export.json')
    .then((respuesta) => {
        return respuesta.json();
    } ).then((respuesta) => {
        document.getElementById('nombre').value = respuesta.Sakamichi;
        document.getElementById('apellido').value = respuesta.Hinatazaka46;
    })
*/
