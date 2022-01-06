import axios from 'axios'
const _axios = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const getPokemonList = () => _axios.get('/pokemon', {
    params: {
        limit: 151,
        offset: 0,
    }
}).then(({ data }) => data)

export const getPokemonByName = (name) => _axios.get(`/pokemon/${name}`)
    .then(({ data }) => data)