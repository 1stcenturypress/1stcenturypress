let btn = document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  let gender = document.getElementById("gender");
  let name = document.getElementById("name");
  let birth = document.getElementById("birth");
  let skin = document.getElementById("skin");
  const random_num = Math.ceil(Math.random() * 83);
  name.innerHTML = "<i>Scanning...</i>";
  gender.innerHTML = "<i>Scanning...</i>";
  birth.innerHTML = "<i>Scanning...</i>";
  skin.innerHTML = "<i>Scanning...</i>";
  fetch(`https://swapi.dev/api/people/${random_num}/`)
    .then((response) => response.json())
    .then((character) => {
      setTimeout(() => {
        name.innerText = character["name"];
        gender.innerText = character["gender"];
        birth.innerText = character["birth_year"];
        skin.innerText = character["skin_color"];
      }, 200);
    });
});
