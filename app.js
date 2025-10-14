// Exercise: 1 

function plus(num) {
    return function (plusNumber) {
        return num + plusNumber;
    };
}

const plus2 = plus(2);

console.log(plus2(2)); // 4
console.log(plus2(5)); // 7

const plus100 = plus (100);

console.log(plus100(100)); // 200
console.log(plus100(5)); // 105


// Exercise:2 forEach

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];


users.forEach((user) => console.log(user.name)); // doing something for each item in the array


// Exercise: 3 Map


let newUsers = users.map((user) => ({
    name: user.name, 
    score: user.score,    
})); // transforms into a new array without mutating the old one, of the same objects just name and score properties/fields

console.log(`This is the new users: ${newUsers}`);

// Exercise: 4 Filter

let activeUser = users.filter((user) => user.isActive); //slects a subset(filtered stuff) into a new array

console.log(activeUser);


// Exercise: 5 Sort

users.sort((a, b) => b.score - a.score); // this mutates the original array! highest to lowest

console.log(users);


// Exercise: 6  Reduce


let averageScore = users.reduce((sum, user ) => sum + user.score, 0) / users.length; //reduce combines into a single value

console.log(averageScore);





