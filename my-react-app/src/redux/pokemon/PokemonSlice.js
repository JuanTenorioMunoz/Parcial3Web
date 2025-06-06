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
        },
        addCapturedPokemons:(state,action) => {
            state.capturedPokemons = [...state.capturedPokemons,action.payload]
            console.log("CAPTURADIO",state.capturedPokemons)
        },

        
    }
})

export const {addCapturedPokemons,setApiPokemons} = PokemonSlice.actions;
export default PokemonSlice.reducer;