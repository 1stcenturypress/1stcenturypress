// "use strict";

// Creating Intervals
/*
let count = 0;
const myInterval = setInterval(() => {
  console.log(`Checking...${count + 1}`);
  count++;

  if (count === 4) {
    clearInterval(myInterval);
    console.log("That's all, folks!");
  }
}, 2000);
*/

/*
// Destructuring an Array
const months = ["January", "February", "March"];
const [jan, feb] = months;
console.log(jan, feb); // January February
console.log(months); // (3) ["January", "February", "March"]
// The second destructures the first but the first remains intact

// Destructuring an Object
const person3 = {
  name: "Arthur",
  city: "Herefordshire",
  drink: "Tea",
};

const { name, city, drink } = person3;
console.log(`${name} - ${city} - ${drink}`);
// Arthur - Herefordshire - Tea
console.log(person3);
// {name: 'Arthur', city: 'Herefordshire', drink: 'Tea'}
*/

/*
const person4 = {
  name: "Ford",
  planet: "Betelguese",
};
delete person4["planet"]; // will delete the object property
// delete person4; // will fail
*/

/*
// Random Number Guessing Game
// Note that this is intentionally coded to randomize the number INSIDE the while loop so that a wrong answer refreshes the random number each time! If the randomNumber declaration were moved OUTSIDE the while loop, the user would only need up to 10 possible guesses to get it right!
while (true) {
  let number = prompt("Guess My Number (1 to 10)");
  let randomNumber = Math.ceil(Math.random() * 10);
  number = Number(number);
  if (number === randomNumber) {
    alert(`YOU GOT IT! It was ${randomNumber}!`);
    break;
  } else {
    console.log(`You guessed ${number} but it was ${randomNumber}`);
  }
}
*/

/*
// Try/Catch/Finally
// The following attempts to (A) try to add 20 to the const num
const num = 10;
try {
  num = num + 20;
  // if there is an error, it "catches" it and controls the output
  // (without TRY/CATCH, it would error and stop everything here)
} catch (error) {
  console.warn("ERROR LOG: ", error);
  // but with TRY/CATCH it pushes on through the process...
} finally {
  console.log("The final number is ", num);
}
// and then continues with the remaining coding...
console.log("But the coding goes on!...");
// this is graceful error catching without crashing the page!
*/

// The 'THIS' Keyword
/*
const person5 = {
  name: "Arthur",
  drink: "tea",
  vehicle: "spaceship",
  speak() {
    console.log(
      `${this.name} asked, "Is there any ${this.drink} on this ${this.vehicle}?"`
    );
  },
};

person5.speak();
*/

/*
//  NOte: This wouldn't run without error in Strict Mode
function counter() {
  if (this.total == undefined) {
    this.total = 1;
  } else {
    this.total++;
  }
  console.log("Running Counter: ", this.total);
}
counter(); // Running Counter: 1
counter(); // Running Counter: 2
counter(); // Running Counter: 3
counter(); // Running Counter: 4
*/

/*
// Arrow Functions
// Multiple ways of producing the same functional results:

// One - declared function
function hello() {
  return "Hello Arthur";
}
const greeting = hello();
console.log(greeting); // Hello Arthur

// Two - internal function
const hello2 = function () {
  return "Hello Arthur";
};
const greeting2 = hello2();
console.log(greeting2); // Hello Arthur

// Three - arrow function
const hello3 = () => {
  console.log("Hello Arthur");
};
hello3(); // Hello Arthur

// Four - arrow function
const hello4 = () => "Hello Arthur";
hello4(); // not sent to console

// And a more real-world arrow function example
const myNewGreeting = (firstName, lastName) => {
  console.log(`Welcome, ${firstName} ${lastName}`);
};
myNewGreeting("Ford", "Prefect"); // Welcome, Ford Prefect
// Note the multiple parameters assigned in the function parentheses
*/

/*
class MyClassName {
  setName(name) {
    this.name = name;
  }
  crap() {
    console.log(`${this.name} just took a 💩!`);
  }
  curse() {
    if (this.name === undefined) {
      console.log(`Maybe you should name your freakin' dog!`);
    }
  }
  speak() {
    if (this.name === undefined) {
      this.curse();
      this.name = "No Name";
      this.crap();
    } else {
      console.log(`"Woof woof" says the dog named ${this.name}`);
    }
    console.log(`"The Adventures of ${this.name}" will continue...`);
  }
}
const thing = new MyClassName();
thing.setName("Doggie Howlser");
thing.speak();
*/

/*
class Person {
  constructor(name, pronoun, career, activities) {
    this.name = name;
    this.pronoun = pronoun;
    this.career = career;
    this.activities = activities;
  }
  greeting() {
    console.log(
      `Meet ${this.name}. ${this.pronoun} is ${this.career} and enjoys ${this.activities}.`
    );
  }
}

const star1 = new Person(
  "Arthur",
  "He",
  "an accountant",
  "really hot tea and taking baths"
);
star1.greeting();
const star2 = new Person(
  "Ford",
  "He",
  "a professional hitchhiker",
  "traveling to other planets and writing entries for the Guide"
);
star2.greeting();
const star3 = new Person(
  "Trillian",
  "She",
  "a struggling mathmetician",
  "taking adventures and seeing the universe"
);
star3.greeting();
const star4 = new Person(
  "Zaphod",
  "He",
  "the galactic president",
  "spending time with himself"
);
star4.greeting();
*/

/*
// For the Final Project - Star War Character Databank
fetch("https://swapi.dev/api/people/14/")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  });
*/
