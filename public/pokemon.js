const lista = [];
fetch(`https://pokeapi.co/api/v2/pokemon/1`)
  .then((res) => res.json())
  .then((datos) => {
    lista.push(datos);
    console.log(lista[0].order.toString());
    console.log(datos.name);
    datos.types.forEach((tipo, jaja, array) => {
      console.log(tipo.type.name);
      // console.log(array[jaja].type.name);
    });
    lista.push();
  });

/* for (let i = 0; i < 4; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
    .then((res) => res.json())
    .then((datos) => {
      pokemonName = datos;
      let tipos = 0;
      const pokeTipos = [];
      while (tipos < pokemonName.types.length) {
        pokeTipos[tipos] = JSON.stringify(datos.types[tipos].type.name);

        tipos++;
      }
      console.log(pokemonName.name);
    });
}

async function imprimir() {}

console.log(pokemonName.length);

let pokemonName = [];
for (let i = 0; i < 4; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
    .then((res) => res.json())
    .then((datos) => {
      pokemonName = datos;
      let tipos = 0;
      const pokeTipos = [];
      while (tipos < pokemonName.types.length) {
        pokeTipos[tipos] = JSON.stringify(datos.types[tipos].type.name);
        console.log(pokeTipos[tipos]);
        tipos++;
      }
      console.log(pokemonName);
    });
}

async function cargarPokemones() {
  const promesas = [];

  for (let i = 1; i <= 4; i++) {
    promesas.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json())
    );
  }

  const pokemones = await Promise.all(promesas);

  const pokemonList = pokemones.map((p) => ({
    nombre: p.name,
    tipos: p.types.map((t) => t.type.name),
    id: p.id,
  }));

  return pokemonList;
}

// Imprimir todos
cargarPokemones().then((lista) => {
  lista.forEach((pokemon, index) => {
    console.log(`Pokémon #${index + 1}: ${pokemon.nombre}`);
    console.log(`Tipos: ${pokemon.tipos.join(", ")}`);
    console.log("---");
  });
});

console.log(pokemonList); */
