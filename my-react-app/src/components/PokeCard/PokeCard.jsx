import { useNavigate } from "react-router-dom"

const PokeCard = ({id, name, image}) => {

    const navigate = useNavigate();

    const goToPokemon = () => {
        navigate(`/field/${id}`)
    }

    return(
        <>
            <h1>{name}</h1>
            <img src={image}></img>
            <div>
                <button onClick={()=>{goToPokemon()}}>ver detalle</button>
                <button onClick={()=>{capturePokemon()}}>Capturar</button>
                <button onClick={()=>{freePokemon()}}>Liberar</button>
            </div>
        </>
    )
}

export default PokeCard