const url = ""; // site that doesn’t send Access-Control-*
fetch(url)
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("No puede acceder" + url + " bloqueado por exploradorS"))
