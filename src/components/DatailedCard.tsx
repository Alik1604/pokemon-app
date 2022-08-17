import React from "react";
import StatsBar from "./StatsBar";
import TypeOfPokemonBlok from "./TypeOfPokemonBlok";
interface Props {
  pokemon: any;
}

const DatailedCard: React.FC<Props> = ({ pokemon }) => {
  return pokemon === undefined ? null : (
    <div className="flex grow flex-col w-[30%] relative items-center min-h-[520px]">
      <img
        className="h-[300px] w-[300px] absolute bottom-[360px]"
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <div className="w-full max-w-[400px] h-[450px] mt-[220px] bg-white rounded-[10px] flex flex-col items-center">
        <div className="text-[16px] text-[#C7C7C7] mt-[75px] ">
          {" "}
          № {pokemon.id}
        </div>
        <div
          className={` inline leading-[40px] ${
            pokemon.name.length >= 16 ? "text-[38px]" : "text-[48px]"
          } `}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </div>
        <TypeOfPokemonBlok className="mt-[15px]" types={pokemon.types} />
        <div className="flex flex-row gap-[30px] mt-[25px]">
          <div className="text-[20px] flex flex-col text-[#324153] items-center">
            <div>WEIGHT</div>
            <div className="text-[24px] text-[#324153] mt-[10px] flex items-center bg-[#ECF3FF] rounded-[20px] px-[50px] h-[40px]">
              <span className="pb-[4px]">{pokemon.weight / 10}Kg</span>
            </div>
          </div>
          <div className=" text-[20px] flex text-[#324153]text-[#324153] flex-col items-center">
            <div>HEIGHT</div>
            <div className="text-[24px] mt-[10px] flex items-center bg-[#ECF3FF] rounded-[20px] px-[50px] h-[40px]">
              <span className="pb-[4px]">{pokemon.height / 10}m</span>
            </div>
          </div>
        </div>
        <StatsBar stats={pokemon.stats} />
      </div>
    </div>
  );
};

export default DatailedCard;
