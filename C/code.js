var a=["tonny","jafet","beymar","wilmer","maik","jesus","brayan","eugenio","josias","jorge","jhon","jasmin"];
function sorteo(){
    var b = Math.floor(Math.random() * a.length);
    var nombre = a[b];
    document.getElementById('mostrar').value = nombre;
}

function lista() {
    var nb = "<ul>";
    for (var i = 0; i < a.length; i++) {
        nb += "<li>" + a[i] + "</li>";
    }
    nb += "</ul>";
    document.getElementById('lista').innerHTML = nb;
}