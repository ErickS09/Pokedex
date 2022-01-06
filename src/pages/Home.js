import { useEffect, useState } from 'react';
import { getPokemonList } from '../services'
import PokemonItem from '../components/PokemonItem';


function Home() {
    const [state, setState] = useState([])
    
    useEffect(() => {
        getPokemonList().then((data) => setState(data.results))
    }, [])

    return (
        <>
            {state.map((pokemon, i) => (
                <PokemonItem key={`pokemon-${i}`} name={pokemon.name} urlInfo={pokemon.url} />
            ))}
        </>
    )
}
export default Home