import { useEffect, useState } from "react"
import { fetchHREF, fetchPokemons } from "../../services/apiFetch"
import { useDispatch, useSelector } from "react-redux"
import { setApiPokemons } from "../../redux/pokemon/PokemonSlice";
import PokeCard from "../../components/PokeCard/PokeCard";

const Enciclopedia = () => {

    const dispatch = useDispatch();
    const capturedPokemons = useSelector((state) => state.pokemons.capturedPokemons)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(capturedPokemons.length > 0){
            setLoading(false)
        }
    },[])

    console.log(capturedPokemons,"caputeded")

    return(
        <>
        {loading ?
        (<h1>loading</h1>)
        :(
            capturedPokemons.map((pokemon)=>{
            return <PokeCard
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    ></PokeCard>
            })
        )}
        </>
    )
}

export default Enciclopedia