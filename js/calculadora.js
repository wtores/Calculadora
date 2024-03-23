function cambiar() {
    let estilo = document.getElementById("estilo");

    if (estilo.getAttribute("href") === "css/styles.css") {
        estilo.setAttribute("href", "css/stylesDark.css");
    } else {
        estilo.setAttribute("href", "css/styles.css");
    }
}

let operacionEnCurso = false;


function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
    operacionEnCurso = false;
}

function borrarUltimo() {
    var pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

function agregarValor(valor) {
    document.getElementById('pantalla').value += valor;
    operacionEnCurso = true;
}

function agregarOperador(operador) {
    if (operacionEnCurso) {
        document.getElementById('pantalla').value += operador;
        operacionEnCurso = false;
    }
}

function calcular() {
    var pantalla = document.getElementById('pantalla');
    pantalla.value = eval(pantalla.value);
    operacionEnCurso = false;
}

function calcularPorcentaje() {
    var pantalla = document.getElementById('pantalla');
    if (operacionEnCurso) {
        pantalla.value = eval(pantalla.value + "/100");
    }
}


