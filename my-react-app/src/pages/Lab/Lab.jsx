import { useSelector } from "react-redux"


const Lab = () => {

    const capturedPokemons = useSelector((state) => state.pokemons.capturedPokemons)

    console.log(capturedPokemons)
    return(
        <>
        </>
    )
}

export default Lab