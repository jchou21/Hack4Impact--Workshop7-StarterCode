let pokedex = document.getElementById("pokedex")

let promises = [];

const fetchPokemon = () => {
    for(let i = 1; i <= 150; i++){
        // API link
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`

        // fetch(url).then(res => res.json) gets a json file with the data
        promises.push(fetch(url).then(res => res.json()))
    }

    // console.log("done fetching")
}

fetchPokemon()

Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
    }))
    displayPokemon(pokemon)
    // console.log("finished mapping all of the pokemon")
})

const displayPokemon = (pokemon) => {
    console.log(pokemon)

    const pokemonHTMLString = pokemon.map((pokeman) => `
        <li>
            <img src="${pokeman.image}">
            <h2>${pokeman.id}. ${pokeman.name}</h2>
            <p>Type: ${pokeman.type}</p>

        </li>
    `)
    .join(" ")

    // console.log(pokemonHTMLString)
    console.log(pokedex)
    pokedex.innerHTML = pokemonHTMLString
    console.log("finished updating innerHTML")
}

