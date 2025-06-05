import { PokemonReducer } from "./pokemon/PokemonSlice";

export const store = configureStore({
    reducer:{
        pokemons: PokemonReducer,
    }
})