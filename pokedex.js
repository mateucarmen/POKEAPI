console.log("Pokeapi");

const pokedex = document.querySelector("#pokedex");


function addPokemon(pokemon) {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("pokemon-card");
    div.setAttribute("id", pokemon.id);

    const h2 = document.createElement("h2");
    h2.innerHTML = pokemon.name.toUpperCase();

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.front_default);

    const p = document.createElement("p");
    p.innerHTML = "#" + pokemon.id.toString().padStart(3, 0);

    figure.appendChild(img);

    div.appendChild(figure);
    div.appendChild(p);
    div.appendChild(h2);

    li.appendChild(div);

    pokedex.appendChild(li);


};


async function fetchPokemons(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        addPokemon(data);
    } catch (error) {
        console.log(error);
    }
};

// fetchPokemons(1);


async function getPokemons(number) {
    try {
        for (let i = 1; i <= number; i++) [
            await fetchPokemons(i)
        ]
    } catch (error) {
        console.log(error);
    }
};

getPokemons(150);










