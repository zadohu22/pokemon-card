const pokeApi = async (mon) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${mon}/`);
  const data = await res.json();
  // const pokemonInfo = {
  //   name: data.name,
  //   types: data.types,
  //   abilities: data.abilities,
  //   sprite: data.sprites.front_default,
  // };
  return data;
};

export default pokeApi;
