// lab-03.js

// TODO Part 11: Import reverseString() and concatenateString() from lab-03-module.js
const { reverseString, concatenateString } = require('./lab-03-module');

// Declare a specific car object
let car = {
    make: "Ford",
    model: "Mustang",
    vin: "4S3BMHB68B3286050",
    color: "Red",
    year: 2019,
    mileage: 1234,
    used: true,
    owners: [
        { last: "Last1", first: "First1" },
        { last: "Last2", first: "First2" }
    ]
}

// Assign car make and model to constant variables
// const make = car.make;
// const model = car.model;

// TODO Part 2: Use object destructuring
const { make, model } = car;

// Declare a normal function
function getCarMakeModel(car) {
    return car.make + " " + car.model;
}
console.log(0, getCarMakeModel(car));

// TODO Part 3: Arrow function with implicit return
const getCarMakeModelImplicit = car => `${car.make} ${car.model}`;
console.log(1, getCarMakeModelImplicit(car));

// TODO Part 4: Arrow function with explicit return
const getCarMakeModelExplicit = car => {
    return `${car.make} ${car.model}`;
};
console.log(2, getCarMakeModelExplicit(car));

// TODO Part 5: Arrow function with destructuring and explicit return
const getCarMakeModelDestructure = ({ make, model }) => {
    return `${make} ${model}`;
};
console.log(3, getCarMakeModelDestructure(car));

// TODO Part 6: for..in loop
for (let prop in car) {
    if (car.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

// Display all values of an array
const primes = [2, 3, 5, 7, 11];
// for (let index = 0; index < primes.length; index++) {
//     console.log(primes[index]);
// }

// TODO Part 7: for..of loop
for (let prime of primes) {
    console.log(prime);
}

// TODO Part 12: Use reverseString and concatenateString in a single line
console.log(concatenateString(reverseString("abc"))); // Output: cbacba
