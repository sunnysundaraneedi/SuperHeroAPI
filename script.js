// https://www.superheroapi.com/api.php/10223569763528853/

const SUPERHERO_TOKEN = "10223569763528853";
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById("newHeroButton");
const heroImageDiv = document.getElementById("heroImage");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const heroTitleDiv = document.getElementById("hero-title");
const aboutHeroDiv = document.getElementById("about-hero");

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "📊",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const name = character.name;
  const img = character.image.url;
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} : ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  heroImageDiv.innerHTML = `<img src="${img}"  
      height= 300 width=300 />`;
  heroTitleDiv.innerHTML = `<h1>${name}</h1>`;
  aboutHeroDiv.innerHTML = stats;
};

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const hero = json.results[0];
      console.log(hero);
      showHeroInfo(hero);
    });
};

// 731

newHeroButton.onclick = () => getSuperHero(Math.ceil(Math.random() * 732));
searchButton.onclick = () => getSearchSuperHero(searchInput.value);
