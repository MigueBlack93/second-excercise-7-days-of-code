/*let age = 0;
let namem = 0;
let favouriteLanguage = 0;

function limpiar(limpiar, visible){
    let ingreso = document.getElementById(limpiar);
    ingreso.setAttribute("hidden", "");

    let respuesta = document.getElementById(visible);
    respuesta.removeAttribute("hidden");
}

function enviar1(){
    age = document.getElementById("age").value;
    namem = document.getElementById("name").value;
    favouriteLanguage = document.getElementById("prog-language").value;

    limpiar("first", "second");

    let firstResponse = document.getElementById("respuesta-1");

    firstResponse.innerHTML = `Hola ${namem}, tienes ${age} años y ya estás aprendiendo ${favouriteLanguage}!`;
}

function next(){
    let text = document.getElementById("do-you-like");

    limpiar("second", "third");;

    text.innerHTML = `¿Te gusta estudiar ${favouriteLanguage}? <br><br> Responde con el número 1 para SÍ o 2 para NO.`;
}

function enviar2(){
    let like = document.getElementById("like").value;
    let secondResponse = document.getElementById("respuesta-2");

    if (like == 1){
        limpiar("third", "fourth");
        secondResponse.innerHTML = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    } else {
        limpiar("third", "fourth");
        secondResponse.innerHTML = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    }
}*/

let questions = ["¿Cuál es tu nombre?", "¿Cuántos años tienes?", "¿Qué lenguaje de programación estás estudiando?"];
let answers = ["¡Muy bien! Sigue estudiando y tendrás mucho éxito.", "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?"];
let contest = [];

for(i = 0 ; i < questions.length; i++){
    contest.push(prompt(questions[i]));
}

alert(`Hola ${contest[0]}, tienes ${contest[1]} años y ya estás aprendiendo ${contest[2]}!`);

contest.push(prompt(`¿Te gusta estudiar ${contest[2]}? Responde con el número 1 para SÍ o 2 para NO.`));

if (contest[3]==1)
    alert(answers[0]);
else
    alert(answers[1]);