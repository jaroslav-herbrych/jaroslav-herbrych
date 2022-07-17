'use strict';

// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descPortugal, descGermany, descFinland);

//Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

// Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

//Functions Calling Other Functions
function describePopulation1(country, population) {
    const percentage1 = percentageOfWorld1(population);
    const description1 = `${country} has ${population} million people, which is about ${percentage1}% of the world.`;
    return description1;
}
console.log(describePopulation1("Portugal", 10));

const describePopulation2 = function (country, population) {
    const percentage2 = percentageOfWorld2(population);
    const description2 = `${country} has ${population} million people, which is about ${percentage2}% of the world.`;
    console.log(description2);
}
describePopulation2("China", 1441);

const describePopulation3 = (country, population) => {
    const percentage3 = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is about ${percentage3}% of the world.`;
}
console.log(describePopulation3("USA", 332));

// Coding Challange #1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy. (${avgDolphins} vs. ${avgKoalas}).`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins}).`);
    } else {
        console.log("No team wins.");
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Introduction to Arrays
const population = [10, 1441, 332, 83];
console.log(population.length === 4);
const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3])
];
console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ["Norway", "Sweden", "Russia"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country.");
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

//Coding Challange #2
function calcTip(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);

//Introduction to Objects
let myCountry = {
    country: "Czechia",
    capital: "Prague",
    language: "Czech",
    population: 10,
    neighbours: ["Germany", "Poland", "Slovakia", "Hungary", "Austria"]
}
console.log(myCountry.country);

// Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

// Object Methods
myCountry = {
    country: "Czechia",
    capital: "Prague",
    language: "Czech",
    population: 10,
    neighbours: ["Germany", "Poland", "Slovakia", "Hungary", "Austria"],
    
    describe: function() {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.lenght} neighbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.lenght === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// Coding Challange #3
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
console.log(mark.bmi);

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95
}