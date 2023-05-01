fetch("https://api.disneyapi.dev/characters")
  .then((resp) => resp.json())
  .then((resp) => displayCharacters(resp.data))
  .catch((err) => console.error(err));

let displayCharacters = (characters) => {
  console.log(characters);
  let section = document.querySelector("section");
  characters.forEach((character) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-12", "col-sm-6", "col-md-3");
    let img = document.createElement("img");
    img.setAttribute("src", character.imageUrl);
    img.setAttribute("alt", character.name);
    img.classList.add("card-img-top");
    card.append(img);
    let div = document.createElement("div");
    div.classList.add("card-body");
    card.append(div);
    let name = document.createElement("p");
    name.innerText = character.name;
    name.classList.add("card-text", "text-primary");
    div.append(name);
    section.append(card);
  });
};
