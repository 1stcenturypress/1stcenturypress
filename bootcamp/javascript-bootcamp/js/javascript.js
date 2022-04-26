// Grabbing the DIV with ID 'box' from our HTML page
const box = document.getElementById("box");
// Overriding the value to the 'box2' and 'box3' DIVs
box2.innerText = `I have overridden the text in DIV#box2 with JS!`;
// innerText only works with text -- NO HTML
box3.innerHTML = `I have <strong>overridden</strong> the HTML in DIV#box3 with JS!`;
// innerHTML will work with BOTH text and HTML

// We can declare variables as objects...
const being1 = {
  name: "Arthur",
  species: "Earthling",
  favDrink: "Tea",
  clothing: "Dressing Gown",
};
// ...and send their values to the HTML page through IDs!!!
person.innerHTML = `Being: ${being1.name} <br>Species: ${being1.species} <br>Favorite Drink: ${being1.favDrink} <br>Last seen wearing a ${being1.clothing}`;

const being2 = {
  name: "Zaphod",
  species: "Beteleguesian",
  favDrink: "Pangalactic Gargle Blaster",
  clothing: "Three-Armed Dressing Gown",
};
alien.innerHTML = `Being: ${being2.name} <br>Species: ${being2.species} <br>Favorite Drink: ${being2.favDrink} <br>Last seen wearing a ${being2.clothing}`;

// Some basic actions we can request of our variables...
const course = "JavaScript 101: coding for beginners";
course.search("coding"); // 16
course.slice(16, 22); // coding (start, end)
course.substr(16, 6); // coding (from, length) ** deprecated **
course.replace("coding", "Programming");
course.toUpperCase();
course.toLowerCase();
course.trim(); // removes outer spaces
// course.length(); // 36 (0 through 35 actually)
course.split(" "); // converts to array of words

// Concatenation -- or the combining of text and variable elements
concatenation.innerHTML = `The ${being1.species} is called ${being1.name} while the ${being2.species} is called ${being2.name}.`; // The Earthling is called Arthur while the Betelguesian is called Zaphod.

// Arrays
// arrays can take any type of item
const lst = ["One", 2, 3.0, [], {}]; // 5 items in slots 0 to 4
// can add one item to the end of the array
lst.push("New Item"); // added to slot 5
const newItem = lst.pop(); // last item removed/placed in its own variable

// Without some sort of looping (iteration), arrays are just lists in storage -- relatively useless.
// They need a FOR or FOR/EACH loop/iteration

const arr = ["Zero", "One", "Two", "Three"];
// Old School method...
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Newer method using Lambda expression...
arr.forEach((num) => {
  console.log(num);
});
