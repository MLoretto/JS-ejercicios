function esEntero(numero) {
    return !isNaN(numero) && eval(numero).toString().length == parseInt(eval(numero)).toString().length
}

const clasificar = function(edad){
    if(esEntero(edad)){
        let etapa = "";
        if (edad >= 1 && edad < 3){
          etapa = "Toddler";
        }
        if (edad >= 3 && edad < 5){
          etapa = "Preschool";
        }
        if (edad >= 5 && edad < 12){
          etapa = "Gradeschooler";
        }
        if (edad >= 12 && edad < 18){
          etapa = "Teen";
        }
        if (edad >= 18 && edad < 21){
          etapa = "Young Adult";
        }
        if (edad >= 21){
          etapa = "adult";
        }   
        return etapa;      
    }else{
        return "Error, debe escribir un número";
    }
}
const edad = prompt('¿Que edad tienes?');
document.getElementById("resultado").innerHTML = "<p>Su clasificacion es: " +  clasificar(edad) + "</p><br>";