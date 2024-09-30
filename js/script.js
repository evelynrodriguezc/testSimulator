window.onload = function() {
    document.querySelector('button').onclick = calificarExamen;
};

function calificarExamen(){
    let nombre = document.getElementById("nombre").value;

    if(nombre === ""){
        alert("Por favor ingrese su nombre.");
        return;
    }
    
    let respuestas = obtenerRespuestas();
    let calificacion = calcularCalificacion(respuestas);
    
    mostrarResultado(nombre, calificacion)
}

function obtenerRespuestas(){
    let respuestas = {};

    respuestas.pregunta1 = document.getElementById("pregunta1").value.trim().toLowerCase();
    respuestas.pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
    respuestas.pregunta3 = document.querySelector('input[name="pregunta3"]:checked');
    respuestas.pregunta4 = document.getElementById("pregunta4").value;
    return respuestas;
}

function calcularCalificacion(respuestas){
    let correctas = {
        pregunta1: "tokio",
        pregunta2: "C",
        pregunta3: "B",
        pregunta4: "B"
    };

    let puntaje = 0
    if(respuestas.pregunta1 === correctas.pregunta1){
        puntaje++;
    }
    if(respuestas.pregunta2 && respuestas.pregunta2.value === correctas.pregunta2){
        puntaje++;
    }
    if(respuestas.pregunta3 && respuestas.pregunta3.value === correctas.pregunta3){
        puntaje++;
    }
    if(respuestas.pregunta4 === correctas.pregunta4){
        puntaje++;
    }
    return puntaje;
}

function mostrarResultado(nombre, calificacion){
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>${nombre}, has obtenido una calificacion de ${calificacion} de 4</p>`;
    if(calificacion === 4){
        resultadoDiv.innerHTML += "<p class='correcto'> ¡Excelente Trabajo!</p>";
    }else if(calificacion >= 2){
        resultadoDiv.innerHTML += "<p class='correcto'> Bien hecho, pero puedes mejorar</p>";
    }else{
        resultadoDiv.innerHTML += "<p class='incorrecto'> Necesitas estudiar un poco más</p>";
    }
}