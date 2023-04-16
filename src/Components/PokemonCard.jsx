import React, { useState } from "react";
import DisplayStats from "./DisplayStats";
import weaknessChart from "../HelperFunctions/typechart";
import { useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
  const [twoTimesWeak, setTwoTimesWeak] = useState([]);
  const [fourTimesWeak, setFourTimesWeak] = useState([]);
  const [typeOneMultiplier, setTypeOneMultiplier] = useState([]);
  const [typeTwoMultiplier, setTypeTwoMultiplier] = useState([]);

  useEffect(() => {
    setTypeOneMultiplier([]);
    setTypeTwoMultiplier([]);
    for (const pokemonType in weaknessChart) {
      if (
        pokemon.types[0].type.name ===
        pokemonType.charAt(0).toLowerCase() + pokemonType.slice(1)
      ) {
        console.log(weaknessChart[pokemonType]);
        setTypeOneMultiplier(Object.entries(weaknessChart[pokemonType]));
      }
      if (pokemon.types.length > 1) {
        if (
          pokemon.types[1].type.name ===
          pokemonType.charAt(0).toLowerCase() + pokemonType.slice(1)
        ) {
          setTypeTwoMultiplier(Object.entries(weaknessChart[pokemonType]));
        }
      }
    }
  }, [pokemon]);
  console.log("typeOneMult", typeOneMultiplier);
  console.log("typeTwoMult", typeTwoMultiplier);

  // if (pokemon.types.length > 1) {
  //   typeOneMultiplier.forEach((value, index) => {
  //     let calc = value[1] * typeTwoMultiplier[index][1];
  //     console.log(`${value[0]}: ${calc}`);
  //   });
  // }

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

      {/* bottom-section-wrapper */}
      <div className='w-full px-6 flex justify-around'>
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

        {/* weaknesses-wrapper */}
        <div className='mt-4 flex flex-col'>
          <h3>Weaknesses</h3>

          {/* weakness-calc */}
          {typeTwoMultiplier.length > 1
            ? typeOneMultiplier.map((value, index) => {
                let calc = value[1] * typeTwoMultiplier[index][1];
                if (calc === 2) {
                  return <p className='text-orange-400'>{value[0]} x2</p>;
                } else if (calc === 4) {
                  return <p className='text-red-600'>{value[0]} x4</p>;
                }
              })
            : typeOneMultiplier.map((value) => {
                if (value[1] === 2) {
                  return <p className='text-orange-400'>{value[0]} x2</p>;
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
