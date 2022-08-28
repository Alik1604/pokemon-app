import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPokemon } from "../features/pokemonSlice";
import { ArrayPokemonType } from "../types";
import DatailedCard from "./DatailedCard";
import PokemonCard from "./PokemonCard";
import { motion } from "framer-motion";
import ModalPokemonCard from "./ModalPokemonCard";

interface Props {
  arrPokemon: ArrayPokemonType[];
  onClick: Function;
}
const Pokemons: React.FC<Props> = ({ arrPokemon, onClick }) => {
  const [x, setX] = useState(500);
  const [isVisible, setIsVisible] = useState(false);
  const isLoading = useAppSelector((state) => state.pokemons.isLoadingPokemons);
  const pokemons = useAppSelector((state) => state.pokemons.ArrOfPokemons);

  const dispatch = useAppDispatch();
  const [pokemon, SetPokemon] = useState(undefined);

  function setCurrentPokemon(pokemon: any): void {
    if (isVisible) {
      setX(500);
      setTimeout(() => {
        SetPokemon(pokemon);
        setX(0);
      }, 1000);
    } else {
      SetPokemon(pokemon);
      setX(0);
      setIsVisible(true);
      return;
    }
  }

  function loadPokemon(url: object[]) {
    dispatch(getPokemon(url));
  }

  useEffect(() => {
    loadPokemon(arrPokemon);
  }, []);

  const [isFormShown, setIsFormShown] = useState(false);

  const makeFormVisible = () => {
    SetPokemon(pokemon);
    setIsFormShown(true);
  };

  const makeFormInvisible = () => {
    setIsFormShown(false);
  };

  useEffect(() => {
    if (isFormShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isFormShown]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[100% flex flex-col justify-center items-center md:flex-row mt-5 max-h-[1040px] overflow-hidden gap-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-[100%] md:w-[70%] max-h-[750px] overflow-y-auto scrollbar-hide">
        {pokemons.map((p, index) => (
          <motion.div key={index} whileHover={{ scale: 0.9 }}>
            <PokemonCard
              showWindow={makeFormVisible}
              onClick={setCurrentPokemon}
              pokemon={p}
            />
          </motion.div>
        ))}
        <div
          className="flex w-[100%]  justify-center items-center h-[100px] cursor-pointer"
          onClick={() => {
            onClick(12);
          }}
        >
          <span className="w-[95%] rounded-[10px] h-[25px] text-center bg-white">
            More
          </span>
        </div>
      </div>

      <motion.div
        className="xl:flex hidden  w-[30%]  min-h-[620px] "
        initial="hidden"
        animate={{ x }}
        transition={{ delay: 0.5 }}
      >
        <DatailedCard pokemon={pokemon} />
      </motion.div>
      {isFormShown && (
        <div
          className="absolute top-0 left-0 w-full h-[100vh] xl:hidden flex items-center justify-center z-10 bg-black/60"
          onClick={makeFormInvisible}
        >
          <ModalPokemonCard
            pokemon={pokemon}
            makeFormInvisible={makeFormInvisible}
          />
        </div>
      )}
    </div>
  );
};

export default Pokemons;
