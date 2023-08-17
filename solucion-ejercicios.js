// ejericio 1

let numero = prompt("Ingresa un número:");
numero = Number(numero);

if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// ejercicio 2

let edad = prompt("Ingresa tu edad:");
edad = Number(edad);

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// ejercicio 3

let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");
numero1 = Number(numero1);
numero2 = Number(numero2);

if (numero1 > numero2) {
  console.log("El primer número es mayor.");
} else if (numero1 < numero2) {
  console.log("El segundo número es mayor.");
} else {
  console.log("Ambos números son iguales.");
}

// ejercicio 4

let diaSemana = prompt("Ingresa un día de la semana:");
diaSemana = diaSemana.toLowerCase();

if (diaSemana === "lunes" || diaSemana === "martes" || diaSemana === "miércoles" || diaSemana === "jueves" || diaSemana === "viernes") {
  console.log("Es un día laboral.");
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
  console.log("Es un día de fin de semana.");
} else {
  console.log("Día no válido. Ingresa un día de la semana válido.");
}

// ejercicio 5

let calificacion = prompt("Ingresa tu calificación:");
calificacion = Number(calificacion);

if (calificacion >= 60) {
  console.log("Has aprobado.");
} else {
  console.log("Has reprobado.");
}

// ejercicio 6

let numero = prompt("Ingresa un número:");
numero = Number(numero);

if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}

// ejercicio 7

let numeroDia = prompt("Ingresa un número del 1 al 7:");
numeroDia = Number(numeroDia);

switch (numeroDia) {
  case 1:
    console.log("Es lunes.");
    break;
  case 2:
    console.log("Es martes.");
    break;
  case 3:
    console.log("Es miércoles.");
    break;
  case 4:
    console.log("Es jueves.");
    break;
  case 5:
    console.log("Es viernes.");
    break;
  case 6:
    console.log("Es sábado.");
    break;
  case 7:
    console.log("Es domingo.");
    break;
  default:
    console.log("Número no válido. Ingresa un número del 1 al 7.");
}

// ejercicio 8

let año = prompt("Ingresa un año:");
año = Number(año);

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
  console.log("Es un año bisiesto.");
} else {
  console.log("No es un año bisiesto.");
}
