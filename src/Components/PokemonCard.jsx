import React from "react";
import DisplayStats from "./DisplayStats";

const PokemonCard = ({ pokemon }) => {
  return (
    // card-wrapper
    <div className='w-[60%] md:w-[400px] h-[80%] md:h-[600px] border rounded-xl border-blue-500 flex flex-col justify-center items-center'>
      {/* top-name-section */}
      <div className='top-name-section w-full flex justify-center items-center'>
        <p className='text-3xl grow text-center ml-20'>{pokemon.name}</p>
        <p className='text-xl mr-6'>HP: {pokemon.stats[0].base_stat}</p>
      </div>

      {/* typing */}
      <div>
        {pokemon.types.length === 1
          ? pokemon.types[0].type.name
          : `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`}
      </div>

      {/* sprite */}
      <div className='sprite flex justify-center items-center w-[90%] h-[40%] border border-yellow-500'>
        <img
          className='w-full h-full object-cover'
          src={pokemon.sprites.front_default}
          alt='pokemon'
        />
      </div>

      {/* stats-section */}
      <div className='mt-4'>
        <ul className='flex flex-col gap-[10px]'>
          {DisplayStats(pokemon, "Attack", 1)}
          {DisplayStats(pokemon, "Defense", 2)}
          {DisplayStats(pokemon, "SpAtk", 3)}
          {DisplayStats(pokemon, "SpDef", 4)}
          {DisplayStats(pokemon, "Speed", 5)}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
