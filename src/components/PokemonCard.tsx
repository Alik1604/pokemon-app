import React from "react";
import TypeOfPokemonBlok from "./TypeOfPokemonBlok";

type Props = {
  pokemon: any;
  onClick: (pokemon: any) => void;
  showWindow: () => void;
};

const PokemonCard: React.FC<Props> = ({ pokemon, onClick, showWindow }) => {
  return (
    <div
      className="flex flex-col w-full relative items-center min-h-[320px] duration-300"
      onClick={(e) => {
        onClick(pokemon);
        showWindow();
      }}
    >
      <img
        className="h-[200px] w-[200px] absolute top-[0px]"
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <div className="mt-[120px] w-[300px] md:w-[95%]  bg-white h-[200px] rounded-[10px] flex flex-col items-center ">
        <div className="text-[12px] text-[#C7C7C7] mt-[75px]">
          № {pokemon.id}
        </div>
        <div
          className={` ${
            pokemon.name.length >= 16 ? "text-[24px]" : "text-[32px]"
          }`}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </div>
        <TypeOfPokemonBlok types={pokemon.types} />
      </div>
    </div>
  );
};

export default PokemonCard;
