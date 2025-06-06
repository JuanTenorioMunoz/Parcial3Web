import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addCapturedPokemons, freePokemon } from "../../redux/pokemon/PokemonSlice";

const PokeCard = ({id, name, image}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const goToPokemon = () => {
        navigate(`/field/${id}`)
        window.location.reload
    }

    const pokemon = {
        id:id,
        name:name,
        image:image,
    }

    const capturePokemon = () => {
        dispatch(addCapturedPokemons(pokemon))
        console.log("CLICK")
    }

    const freePokemoni = () => {
        dispatch(freePokemon(pokemon))
        console.log("CLICK")
    }

    return(
        <>
            <h1>{name}</h1>
            <img src={image}></img>
            <div>
                <button onClick={()=>{goToPokemon()}}>ver detalle</button>
                <button onClick={()=>{capturePokemon()}}>Capturar</button>
                <button onClick={()=>{freePokemoni()}}>Liberar</button>
            </div>
        </>
    )
}

export default PokeCard