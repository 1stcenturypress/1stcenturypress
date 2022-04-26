const elems = document.querySelectorAll(".this-class");
console.log(elems);

const elements = document.querySelectorAll("li");
elements.forEach((node) => {
  node.innerText = "This is CHANGED!";
});
