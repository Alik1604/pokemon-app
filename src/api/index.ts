import axios from "axios";

export const fetchPokemons = async (amount: number) => {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${amount}`
  );
  return result.data.results;
};

export const fetchPokemon = async (url: any[]) => {
  const a = await Promise.all(
    url.map(async (item) => {
      let pokemon = await getPokemon(item.url);
      return pokemon;
    })
  );

  return a;
};

const getPokemon = async (url: string) => {
  const result = await axios.get(url);
  return result.data;
};
