import { useEffect, useState } from "react"
import { fetchHREF, fetchPokemons } from "../../services/apiFetch"
import { useDispatch, useSelector } from "react-redux"
import { setApiPokemons } from "../../redux/pokemon/PokemonSlice";
import PokeCard from "../../components/PokeCard/PokeCard";
import { useParams } from "react-router-dom";

const Field = () => {

    const {id} = useParams()
    const dispatch = useDispatch();
    const pokemons = useSelector((state)=> state.pokemons.apiPokemons) ||[]
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            const fetchOnePokemon = async () => {
                const fetchedPokemon = await fetchHREF(id)
                const fetchArray = [fetchedPokemon]
                dispatch(setApiPokemons(fetchArray))
                setLoading(false)
            }
            fetchOnePokemon()
        } else {
            const fetchPokemonsFromApi = async () => {
            const pokemonsFetched = await fetchPokemons()
            dispatch(setApiPokemons(pokemonsFetched.content))
            console.log(pokemons,"pokestate")
            setLoading(false)
        }
        
        fetchPokemonsFromApi()
        }
        
    },[id])

    return(
        <>
        {loading ?
        (<h1>loading</h1>)
        :(pokemons.map((pokemon)=>{
            return <PokeCard
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    ></PokeCard>
        }))}
        </>
    )
}

export default Field