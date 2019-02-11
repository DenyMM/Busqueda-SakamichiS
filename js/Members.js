const url = "https://raw.githubusercontent.com/DenyMM/CRUD-KSakamichiS/master/webcrudbde1-Sakamichi-export.json"; 
fetch(url).then(result => result.json())
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("No puede acceder" + url + " bloqueado por exploradorS"))
