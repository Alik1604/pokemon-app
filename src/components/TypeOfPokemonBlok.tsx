import React from "react";
import TypePiec from "./TypePiec";

interface Props {
  types: Array<Object>;
  className?: string;
}

const TypeOfPokemonBlok: React.FC<Props> = ({ types, className }) => {
  return (
    <div className={`${className} flex gap-4 mt-[5%]`}>
      {types.map((p, index) => (
        <TypePiec key={index} piece={p} />
      ))}
    </div>
  );
};

export default TypeOfPokemonBlok;
