
// Values and Variables
const country = "Czechia";
const continent = "Europe";
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = "Czech";
console.log(typeof language);

// Basic Operators
console.log(population / 2);
//console.log(population++);
console.log(population > 6);
console.log(population < 33);

let description = country + " is in " + continent + " and its " + population + " million people speaks " + language; 
console.log(description);

// Coding Challange #1
const massMark = 78;
const heighMark = 1.69;
const massJohn = 92;
const heighJohn = 1.95;

const BMIMark = massMark / heighMark ** 2;
const BMIJohn = massJohn / heighJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Taking decision: if / else Statement
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// Coding Challange #2
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn})is higher than Mark's (${BMIMark})!`);
}


// Equality Operators: == vs. ===
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//     console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

// Logical Operators
if (language === "Czech" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet criteria.`);
}

// Coding Challange #3
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log (scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy.");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy.");
} else {
    console.log("No one wins the trophy.");
}

// The switch Statement
language = "Portugese";

switch (language) {
    case "Chinese":
    case "Mandarin":
        console.log("Most number of native speakers.");
        break;
    case "Spanish":
        console.log("2'nd place in number of native speakers.");
        break;
    default:
        console.log(`${language} is great language too.`);
}

// The Conditional (Ternary) Operator
console.log(`${country} population is ${population > 33 ? "above" : "below"} average`);

// Coding Challange #4
let bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
