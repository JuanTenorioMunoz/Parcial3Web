const apiURL = "https://digi-api.com/api/v1/digimon?pageSize=25"

export const fetchPokemons = () => {
    try {
        return fetch(apiURL)
        .then((response) => response.json())
    } catch (error) {
        console.error(error)
    }
}