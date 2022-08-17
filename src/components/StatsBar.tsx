import React from "react";

interface Props {
  stats: any;
}

const StatsBar: React.FC<Props> = ({ stats }) => {
  return (
    <div className="mt-[10px] flex-col flex items-center">
      <h1 className="text-[20px] mb-2">STATS</h1>
      <div className="flex fle-row gap-[10px] text-white">
        <div className=" bg-[#ECF3FF] h-[90px] w-[45px] rounded-[20px] flex justify-center items-center pt-[2px] flex-col">
          <div className=" bg-[#DF2140] h-[40px] w-[40px] rounded-[20px] flex justify-center items-center">
            <span>HP</span>
          </div>
          <div className="grow text-[#324153] mt-2">{stats[0].base_stat}</div>
        </div>
        <div className=" bg-[#ECF3FF] h-[90px] w-[45px] rounded-[20px] flex justify-center items-center pt-[2px] flex-col">
          <div className=" bg-[#FF8F46] h-[40px] w-[40px] rounded-[20px] flex justify-center items-center">
            <span>ATK</span>
          </div>
          <div className="grow text-[#324153] mt-2">{stats[1].base_stat}</div>
        </div>
        <div className=" bg-[#ECF3FF] h-[90px] w-[45px] rounded-[20px] flex justify-center items-center pt-[2px] flex-col">
          <div className=" bg-[#FEDC4E] h-[40px] w-[40px] rounded-[20px] flex justify-center items-center">
            <span>DEF</span>
          </div>
          <div className="grow text-[#324153] mt-2">{stats[2].base_stat}</div>
        </div>
        <div className=" bg-[#ECF3FF] h-[90px] w-[45px] rounded-[20px] flex justify-center items-center pt-[2px] flex-col">
          <div className=" bg-[#85DDFF] h-[40px] w-[40px] rounded-[20px] flex justify-center items-center">
            <span>SpA</span>
          </div>
          <div className="grow text-[#324153] mt-2">{stats[3].base_stat}</div>
        </div>
        <div className=" bg-[#ECF3FF] h-[90px] w-[45px] rounded-[20px] flex justify-center items-center pt-[2px] flex-col">
          <div className=" bg-[#A9EF8B] h-[40px] w-[40px] rounded-[20px] flex justify-center items-center">
            <span>SpD</span>
          </div>
          <div className="grow text-[#324153] mt-2">{stats[4].base_stat}</div>
        </div>
        <div className=" bg-[#ECF3FF] h-[90px] w-[45px] rounded-[20px] flex justify-center items-center pt-[2px] flex-col">
          <div className=" bg-[#FB94A7] h-[40px] w-[40px] rounded-[20px] flex justify-center items-center">
            <span>SPD</span>
          </div>
          <div className="grow text-[#324153] mt-2">{stats[5].base_stat}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
