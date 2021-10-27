"use strict";

//#1: Mix for e includes**
//Dado el siguiente javascript usa for of para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  { title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"] },
  { title: "El gato con guantes", duration: 111, categories: ["comedia", "aventura", "animación"] },
];

let toArray = [];

for (let i of movies) {
  if (i.categories != undefined) {
    toArray.push(i.categories);
  }
}

// Hemos creado un array de arrays.
// Devuelve  [['comedia', 'aventura'],[ 'aventura', 'acción'], ['comedia', 'thriller'],[ 'comedia', 'aventura', 'animación']]

let mergedArray = [].concat.apply([], toArray);

// Hemos concatenado y creado un solo array
// Devuelve  ['comedia', 'aventura', 'aventura', 'acción', 'comedia', 'thriller', 'comedia', 'aventura', 'animación']

let uniqueChars = [];
mergedArray.forEach((c) => {
  if (!uniqueChars.includes(c)) {
    uniqueChars.push(c);
  }
});

// Limpiamos el aray de duplicados.

console.log(uniqueChars);

// Devuelve ['comedia', 'aventura', 'acción', 'thriller', 'animación']



// #2: Mix Fors
// Dado el siguiente javascript usa for of y for in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let outPut = [];

let vol = users;

for (let user of users) {
  let sounds = user.favoritesSounds;
  for (let vol in sounds) {
    outPut.push(sounds[vol].volume);
  }
}

let suma = 0;
outPut.forEach(function (numero) {
  suma += numero;
});
console.log(suma / 12);
// Devuelve 57.25


// #4: Métodos findArrayIndex
// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

let insectos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  if (array.includes(text)) {
    return array.indexOf(text);
  }
}

console.log(findArrayIndex(insectos, "Mosquito"));

// #5: Función rollDice**
// Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();**

function rollDice(caras) {
  let myDice = Math.floor(Math.random() * caras) + 1;
  return myDice;
}

console.log(rollDice(6));

//#6: Función swap
// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

let jugadoresProEvolution = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
  return arr;
}

console.log(swap(jugadoresProEvolution, 0, 1));
