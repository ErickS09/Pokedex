
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonByName, getPokemonList } from '../services'

function Detail() {

    const params = useParams()
    const { pokemonName } = params
    const [state, setState] = useState({})


    useEffect(() => {
        getPokemonByName(pokemonName).then((data) => setState(data))
    }, [])

    console.log(state)

    return (
        <div>
            <h2>
                {pokemonName.toUpperCase()}
            </h2>
            {state?.id ? <img src={state.sprites.front_shiny} /> : null}
            {state?.id ? <img src={state.sprites.front_default} /> : null}

            <h3>Experiencia: {state.base_experience}</h3>
            <h3>peso: {state.weight}</h3>
            
            
        </div>
    )
}
export default Detail