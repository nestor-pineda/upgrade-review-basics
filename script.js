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

// #5: Función rollDice**
// Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();**

function rollDice(caras) {
  let myDice = Math.floor(Math.random() * caras) + 1;
  return myDice;
}

console.log(rollDice(6));
