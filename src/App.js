import { useState, useEffect } from "react";
import pokeApi from "./API/pokeAPI";
import weaknessChart from "./HelperFunctions/typechart";
import PokemonCard from "./Components/PokemonCard";
import Autocomplete from "./Components/Autocomplete";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const getPokemonInfo = async (pkmn) => {
      const data = await pokeApi(pkmn);
      setPokemon(data);
      setHasLoaded(true);
    };

    getPokemonInfo("pikachu");
  }, []);

  useEffect(() => {
    const getPokemonInfo = async (pkmn) => {
      const data = await pokeApi(pkmn);
      setPokemon(data);
    };

    getPokemonInfo(selectedPokemon);
  }, [selectedPokemon]);

  console.log(pokemon);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedPokemon(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  // checks what types a pokemon is weak to. typeOne is the pokemons first type, typeTwo is the second type,
  // and attackType is what they're being hit against. multiplying the first and the second gives a total weakness.
  // i learned that bracket notation is necessary to access nested objects with function parameters.
  const isWeak = (typeOne, typeTwo, attackType) => {
    const firstTypeWeakness = weaknessChart[typeOne][attackType];
    const secondTypeWeakness = weaknessChart[typeTwo][attackType];
    const finalWeaknessMultiplier = firstTypeWeakness * secondTypeWeakness;
    return finalWeaknessMultiplier;
  };

  console.log(isWeak("Rock", "Steel", "Ground")); // nice this works, returns 4.

  return (
    hasLoaded && (
      <div className='w-full h-full flex justify-center items-center'>
        <Autocomplete setSelectedPokemon={setSelectedPokemon} />
        <PokemonCard pokemon={pokemon} />
        {/* <p>Pokemon name: {pokemon.name}</p>
        <form onSubmit={handleSubmit}>
          <input onChange={handleInputChange}></input>
          <button type='submit'>submit</button>
        </form> */}
      </div>
    )
  );
};

export default App;
