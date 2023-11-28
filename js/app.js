/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

let numeroMagico;
        const botonComenzar = document.getElementById("botonComenzar");
        const entradaUsuario = document.getElementById("entradaUsuario");
        const botonEnviar = document.getElementById("botonEnviar");

        botonComenzar.addEventListener("click", () => {
            numeroMagico = Math.floor(Math.random() * 100) + 1;
            console.log("Número mágico: " + numeroMagico);
            entradaUsuario.disabled = false;
            botonEnviar.disabled = false;
            botonComenzar.disabled = true;
        });

        botonEnviar.addEventListener("click", () => {
            const numeroUsuario = Number(entradaUsuario.value);
            if (numeroUsuario === numeroMagico) {
                alert("¡Felicitaciones! Haz adivinado el número mágico");
                entradaUsuario.disabled = true;
                botonEnviar.disabled = true;
                botonComenzar.disabled = false;
            } else if (numeroUsuario > numeroMagico) {
                alert("El número que ingresaste es mayor al número mágico");
            } else {
                alert("El número que ingresaste es menor al número mágico");
            }
        });