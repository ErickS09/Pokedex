import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonByName, getPokemonList } from '../services'
import { Card } from 'antd';

function Detail() {

    const params = useParams()
    const { pokemonName } = params
    const [state, setState] = useState({})
    const { Meta } = Card;

    useEffect(() => {
        getPokemonByName(pokemonName).then((data) => setState(data))
    }, [])

    console.log(state)

    return (
        <div>
            <Card
                hoverable
                style={{ width: 240, margin: 15 }}
               
                cover={state?.id ? <img src={state.sprites.front_shiny} /> : null}
            >
                <Meta title={pokemonName.toUpperCase()} />
                <h3>Experiencia: {state.base_experience}</h3>
            </Card>


        </div>
    )
}
export default Detail



