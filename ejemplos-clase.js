// let numero1 = 10;
// let numero2 = "10";

// // Comparación de igualdad
// console.log(numero1 == numero2); // true
// console.log(numero1 === numero2); // false

// // Comparación de desigualdad
// console.log(numero1 != numero2); // false
// console.log(numero1 !== numero2); // true

// //ejemplo incremento

// const contador = document.querySelector('.contador')
// const button = document.querySelector('.button')

// let total = 0
// button.addEventListener('click', () => {
//     total++
//     contador.innerHTML = total
// })

// let numero1 = false;

// console.log(!numero1);

// const valor = 4;

// if (valor > 10) {
//   console.log("Es mayor que 10");
// } else if (valor > 5) {
//   console.log("Es mayor que 5");
// } else {
//   console.log("no cumple con ninguna condicion");
// }

// Operador ternario
// const edad = 20;
const nombre1 = "juan";
const nombre2 = "sebastian";
// const result = edad >= 18 ? nombre1 : nombre2;

// console.log("edad -->>",result);
console.log("dia -->>", new Date().getDay());
switch (new Date().getDay()) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("No es ningun dia");
    break;
}

if (nombre1 == nombre2) {
  // compara que dos valores sean iguales pero no evaluando el tipo de dato
}

if (nombre1 != nombre2) {
  // compara que dos valores sean diferentes pero no evaluando el tipo de dato
}

const quantity = 10;
const quantity2 = 10;
const quantity3 = "10";
const quantity4 = 20;

if (quantity === quantity2) {
  // compara que dos valores sean iguales evaluando el tipo de dato
}

if (quantity === quantity3) {
  // compara que dos valores sean iguales evaluando el tipo de dato
}

console.log("quantity", typeof quantity);
console.log("quantity3", typeof quantity3);

console.log("coercion ", quantity == quantity3);
if (quantity == quantity3) {
  console.log("son iguales");
}


if (quantity < quantity4) {
  console.log("es menor");
}

if (quantity > quantity4) {
  console.log("es mayor");
}


if (quantity === quantity2 && quantity === quantity3) {
  console.log("son iguales");
}

if (quantity === quantity2 || quantity === quantity3) {
  console.log("son iguales");
}


const isLoggin = false;

if (!isLoggin) {

  // si es falso = true
  console.log("esta logueado");
}

const edad = 20;
if (edad % 2 === 0) {
  console.log("es par");
}
