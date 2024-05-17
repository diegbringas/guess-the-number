
//se selecciona un numero al azar para adivinar
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0



function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado> 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'por favor introduce un numero valido'
        return
    }

    if(numeroIngresado===numeroAzar){
        mensaje.textContent = "Felicitaciones, has ganado!";
        mensaje.style.color = 'green';
        numeroEntrada.disable = true;
    } 
    else if(numeroIngresado < numeroAzar) {
        mensaje.textContent = 'Mas alto! El numero es mayor al que dijiste';
        mensaje.style.color = 'red';
    }
    else {
        mensaje.textContent = 'Mas bajo! El numero es menor';
        mensaje.style.color = 'red';
    }
}