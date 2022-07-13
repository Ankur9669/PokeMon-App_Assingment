import React, { useEffect } from "react";
import "./pokemonlisting.css";
import { getPokemons } from "../../features/pokemons/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PokemonCard from "../../components/pokemoncard/PokemonCard";

const PokemonListing = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);
  return (
    <div className="pokemon-listing-page">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemonDetails={pokemon} />
      ))}
    </div>
  );
};

export default PokemonListing;
