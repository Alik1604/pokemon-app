import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import DatailedCard from "./components/DatailedCard";
import ModalPokemonCard from "./components/ModalPokemonCard";
import Pokemons from "./components/Pokemons";
import { getPokemons } from "./features/pokemonSlice";
import search from "./img/search.png";

function App() {
  const loading = useAppSelector((state) => state.pokemons.isLoading);
  const pokemons = useAppSelector((state) => state.pokemons.pokemons);
  const [howMuchPokLoad, setHowMuchPokLoad] = useState(12);
  const dispatch = useAppDispatch();

  function loadPokemons(add: number) {
    setHowMuchPokLoad(howMuchPokLoad + add);
    dispatch(getPokemons(howMuchPokLoad));
  }

  useEffect(() => {
    loadPokemons(12);
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="w-[100%] min-h-screen p-[10px] md:p-[30px] bg-[#ECF3FF] flex flex-col">
      <header className="w-[100%] h-[70px]">
        <div className="bg-white min-w-[220px] w-[10%] h-[70px] flex items-center justify-center px-[45px] rounded-[10px] text-[32px] text-[#FF5350] shadow-[1px_2px_4px_0px_rgba(255,83,80,0.5)]">
          {"Pokedex"}
        </div>
      </header>
      {/* <div className="w-[100%] min-h-[40px] mt-5 flex flex-row justify-center">
        <div className="bg-[#fff] min-h-[40px] min-w-[40px] w-[2%] rounded-[10px_0px_0px_10px] focus:outline-none flex justify-center items-center">
          <img className="h-[20px] w-[20px]" src={search} alt="" />
        </div>
        <input
          type="text"
          placeholder="Name or number"
          className="rounded-[0px_10px_10px_0px] min-h-[40px] focus:outline-none w-[90%] md:w-[25%]"
        ></input>
      </div> */}
      <Pokemons onClick={loadPokemons} arrPokemon={pokemons} />
    </div>
  );
}

export default App;
