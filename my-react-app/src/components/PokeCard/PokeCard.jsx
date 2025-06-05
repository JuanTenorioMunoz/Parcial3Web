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
            <button onClick={()=>{}}>ver detalle</button>
        </>
    )
}

export default PokeCard