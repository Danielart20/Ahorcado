
var clicks = 0;
var contador = 6; //----CAMBIAR-----------------

var firstDiv = document.getElementById("firstDiv");
var secondDiv = document.getElementById("secondDiv");
var thirdDiv = document.getElementById("thirdDiv");
var fourthDiv = document.getElementById("fourthDiv");
var fifthDiv = document.getElementById("fifthDiv");
var cont = document.getElementById("numContador");
var pantallaFinal = document.getElementById("pantallaFinal");
var botonFinal = document.getElementById("botonFinal");
var pista1 = document.getElementById("pista1");
var pista2 = document.getElementById("pista2");
var pista3 = document.getElementById("pista3");
var botonpista = document.getElementById("botonpista");
var ganadas = document.getElementById("ganadas");
var perdidas = document.getElementById("perdidas");


var totalTiempo = 60;
var bool = true;

    if("lose" in localStorage){
        var contadorPerdida = localStorage.getItem("lose"); 
        perdidas.innerHTML = localStorage.getItem("lose"); 
    }else{
        var contadorPerdida = 0;
    }
    
    if("win" in localStorage){
        var contadorGanada = localStorage.getItem("win");  
        ganadas.innerHTML = localStorage.getItem("win"); 
    }else{
        var contadorGanada = 0;
    }
    //alert(contadorPerdida);
    



function reloj() {
    if (bool) {
        document.getElementById('tiempo').innerHTML = "TIEMPO: " + totalTiempo + " segundos";

        if (totalTiempo == 0) {
            alert("TIEMPOOOO, HAS PERDIDO!!!");
            contadorPerdida++;
            saveLose();
            perdidas.innerHTML = localStorage.getItem("lose");
            location.reload(true);

        } else {
            totalTiempo -= 1;
            setTimeout("reloj()", 1000);
        }
        if (totalTiempo == 15) {
            document.getElementById('tiempo').style.color = "red";

        }
    }
}
reloj();





for (var i = 0; i < 27; i++) {

    var a = document.getElementsByTagName("a")[i].addEventListener("click", changeBackground);

}

function changeBackground() {
    this.style.backgroundColor = "#b3ffb3";
}

/*function contador(numero, fn){
    var resultado = fn(numero);
    cont.innerHTML = resultado;
    
}*/

var lettersSolution = [];
var arraySolution = ["cerdo", "gatos", "cisne", "mosca"];
var random = Math.floor(Math.random() * (4)) + 0;
var solution = arraySolution[random];

function ObtenerPalabra(palabra) {
    if (palabra === solution.charAt(0)) {
        firstDiv.innerHTML = palabra;
        lettersSolution.push(palabra);

    } else if (palabra === solution.charAt(1)) {
        secondDiv.innerHTML = palabra;
        lettersSolution.push(palabra);

    } else if (palabra === solution.charAt(2)) {
        thirdDiv.innerHTML = palabra;
        lettersSolution.push(palabra);

    } else if (palabra === solution.charAt(3)) {
        fourthDiv.innerHTML = palabra;
        lettersSolution.push(palabra);

    } else if (palabra === solution.charAt(4)) {
        fifthDiv.innerHTML = palabra;
        lettersSolution.push(palabra);

    } else {
        contador--;
        cont.innerHTML = contador;

    }
    GameOver();
}

function GameOver() {

    if (solution.length === lettersSolution.length) {

        alert("Has ganado");
        contadorGanada++;
        saveWin();
        ganadas.innerHTML = contadorGanada;
        location.reload(true);
        alert("Tiempo: " + totalTiempo);
    }


    if (contador === 0) {
        contadorPerdida++;
        saveLose();
        perdidas.innerHTML = contadorPerdida;
        alert("Has perdido");
        location.reload(true);

        if (totalTiempo > 1) {
            bool = false;
        }
    }
    if (totalTiempo === 1) {
        contadorPerdida++;
        saveLose();
        perdidas.innerHTML = localStorage.getItem("lose");
    }

}
GameOver();



function pista() {
    var arrayCerdo = ["Es un animal de Granja", "Es rosa", "Se rebuelca en el barro"];
    var arrayMosca = ["Es un insecto", "Es muy molesto", "Vuela"];
    var arrayGato = ["Es un Animal Domestico", "Tiene Cola", "Son muy ágiles"];
    var arrayCisne = ["Es un ave acuática", "Parecido a los Patos", "Son generalmente de color blanco"];

    if (solution === "cerdo") {
        var htmlPista = arrayCerdo[0];
        var htmlPista2 = arrayCerdo[1];
        var htmlPista3 = arrayCerdo[2];
    } else if (solution === "mosca") {
        var htmlPista = arrayMosca[0];
        var htmlPista2 = arrayMosca[1];
        var htmlPista3 = arrayMosca[2];
    } else if (solution === "gatos") {
        var htmlPista = arrayGato[0];
        var htmlPista2 = arrayGato[1];
        var htmlPista3 = arrayGato[2];
    } else if (solution === "cisne") {
        var htmlPista = arrayCisne[0];
        var htmlPista2 = arrayCisne[1];
        var htmlPista3 = arrayCisne[2];
    }

    if (clicks === 0) {
        pista1.innerHTML = htmlPista;
        totalTiempo = totalTiempo - 10;
        clicks++;
        return false;
    } else if (clicks === 1) {
        pista2.innerHTML = htmlPista2;
        totalTiempo = totalTiempo - 10;
        clicks++;
        return false;
    } else if (clicks === 2) {
        pista3.innerHTML = htmlPista3;
        totalTiempo = totalTiempo - 10;
        clicks++;
        return false;
    } else if (clicks > 2) {
        botonpista.innerHTML = "No mas pistas Amigo";
    }

}

function saveWin() {
    localStorage.setItem("win", contadorGanada);
}

function saveLose(){
    localStorage.setItem("lose", contadorPerdida);
}

function limpiar() {
    localStorage.removeItem("win");
    localStorage.removeItem("lose");
    location.reload(true);

}
