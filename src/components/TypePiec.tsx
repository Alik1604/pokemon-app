import React from "react";

type Props = {
  piece: any;
};

const TypePiec: React.FC<Props> = ({ piece }) => {
  let style = {};
  switch (piece.type.name) {
    case "normal":
      style = { backgroundColor: "#A8A878" };
      break;
    case "fire":
      style = { backgroundColor: "#FB883F" };
      break;
    case "water":
      style = { backgroundColor: "#0691CE" };
      break;
    case "grass":
      style = { backgroundColor: "#68EA43" };
      break;
    case "electric":
      style = { backgroundColor: "#F8D030" };
      break;
    case "ice":
      style = { backgroundColor: "#98D8D8" };
      break;
    case "fighting":
      style = { backgroundColor: "#C03028" };
      break;
    case "poison":
      style = { backgroundColor: "#E55BF1" };
      break;
    case "ground":
      style = { backgroundColor: "#E0C068" };
      break;
    case "flying":
      style = { backgroundColor: "#A890F0" };
      break;
    case "psychic":
      style = { backgroundColor: "#F85888" };
      break;
    case "bug":
      style = { backgroundColor: "#A8B820" };
      break;
    case "rock":
      style = { backgroundColor: "#B8A038" };
      break;
    case "ghost":
      style = { backgroundColor: "#705898" };
      break;
    case "dark":
      style = { backgroundColor: "#705848" };
      break;
    case "dragon":
      style = { backgroundColor: "#7038F8" };
      break;
    case "steel":
      style = { backgroundColor: "#B8B8D0" };
      break;
    case "fairy":
      style = { backgroundColor: "#F0B6BC" };
      break;

    default:
      break;
  }
  return (
    <div
      className={`h-[25px] w-[70px] flex items-center justify-center rounded-[10px] text-white text-[16px] `}
      style={style}
    >
      <span className="pb-[1px]">
        {piece.type.name.charAt(0).toUpperCase() + piece.type.name.slice(1)}
      </span>
    </div>
  );
};

export default TypePiec;
