import { useEffect, useState } from "react"
import { fetchPokemons } from "../../services/apiFetch"

const Field = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPokemonsFromApi = async () => {
            const pokemonsFetched = await fetchPokemons()
            console.log(pokemonsFetched)
        }
        
        fetchPokemonsFromApi()
    },[])

    return(
        <>
        </>
    )
}

export default Field