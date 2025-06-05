const apiURL = "https://digi-api.com/api/v1/digimon?pageSize=25"
const HREF = "https://digi-api.com/api/v1/digimon/"

export const fetchPokemons = () => {
    try {
        return fetch(apiURL)
        .then((response) => response.json())
    } catch (error) {
        console.error(error)
    }
}

export const fetchHREF = (href) => {
    try {
        return fetch(HREF+href)
        .then((response) => response.json())
    } catch (error) {
        console.error(error)
    }
}