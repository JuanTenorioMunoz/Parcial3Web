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
        editPokemon:(state,action) => {
            const pokemonToFree = action.payload
            const freePokemon = state.capturedPokemons.find((pokemon) => 
            pokemon.id = pokemonToFree.id)
            
            if(freePokemon){
                freePokemon.name = pokemonToFree.name
            }
        },
        freePokemon:(state,action) => {
            state.capturedPokemons = state.capturedPokemons.filter((poke)=>
            poke !== action.payload.id)
            console.log(state.capturedPokemons,"im free")
        },
    }
})

export const {freePokemon,addCapturedPokemons,setApiPokemons} = PokemonSlice.actions;
export default PokemonSlice.reducer;