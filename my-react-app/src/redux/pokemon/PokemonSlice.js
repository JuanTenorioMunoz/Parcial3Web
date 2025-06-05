import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    localCatalogue:[],
    capturedPokemons:[],
    apiPokemons: [],
}

export const PokemonSlice = createSlice({
    name:"pokemons",
    initialState,
    reducers:{
        setApiPokemons:(state,action) => {
            state.apiPokemons = action.payload
            console.log(state.apiPokemons, "direct from api")
        }
    }
})

export const {setApiPokemons} = PokemonSlice.actions;
export default PokemonSlice.reducer;