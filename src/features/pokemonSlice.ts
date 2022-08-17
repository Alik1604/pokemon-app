import { createSlice, applyMiddleware, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ArrayPokemonType } from "../types";

interface PokemonsState {
  pokemons: ArrayPokemonType[];
  currentPokemon: any;
  isLoading: boolean;
  ArrOfPokemons: Array<object>;
  isLoadingPokemons: boolean;
}

const initialState: PokemonsState = {
  pokemons: [],
  ArrOfPokemons: [],
  currentPokemon: {},
  isLoading: true,
  isLoadingPokemons: true,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemons: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<ArrayPokemonType[]>) => {
      state.pokemons = action.payload;
      state.isLoading = false;
    },
    getPokemon: (state, action: PayloadAction<object[]>) => {},
    setPokemon: (state, action: PayloadAction<object[]>) => {
      state.ArrOfPokemons = action.payload;
      state.isLoadingPokemons = false;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setCurrentPokemon: (state, action: PayloadAction<any>) => {
      state.currentPokemon = action.payload;
    },
  },
});

export const { getPokemons, setPokemons, getPokemon, setPokemon } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
