import { takeEvery, put, call, fork } from "redux-saga/effects";
import {
  getPokemons,
  setPokemons,
  getPokemon,
  setPokemon,
} from "../features/pokemonSlice";
import { fetchPokemon, fetchPokemons } from "../api/index";
import { ArrayPokemonType } from "../types";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getPokemonWorker(action: PayloadAction<object[]>): Generator {
  const pokemon = (yield call(fetchPokemon, action.payload)) as object[];
  yield put(setPokemon(pokemon));
}

export function* getPokemonsWorker(action: PayloadAction<number>): Generator {
  const pokemons = (yield call(
    fetchPokemons,
    action.payload
  )) as unknown as ArrayPokemonType[];
  yield put(setPokemons(pokemons));
}

export function* wathcOnPokemonCardClick() {
  yield takeEvery(getPokemons.type, getPokemonsWorker);
  yield takeEvery(getPokemon.type, getPokemonWorker);
}

export default function* rootSaga() {
  yield wathcOnPokemonCardClick();
}
