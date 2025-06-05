import { useEffect, useState } from "react"
import { fetchPokemons } from "../../services/apiFetch"
import { useDispatch, useSelector } from "react-redux"
import { setApiPokemons } from "../../redux/pokemon/PokemonSlice";
import PokeCard from "../../components/PokeCard/PokeCard";

const Field = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector((state)=> state.pokemons.apiPokemons) ||[]
    const test = [{name:"e"}]
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPokemonsFromApi = async () => {
            const pokemonsFetched = await fetchPokemons()
            dispatch(setApiPokemons(pokemonsFetched))
            console.log(pokemons,"pokestate")
            setLoading(false)
        }
        
        fetchPokemonsFromApi()
    },[])

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