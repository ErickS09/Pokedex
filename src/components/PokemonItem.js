import { Link } from "react-router-dom"

function PokemonItem({ name, urlInfo }) {
    return (
        <div style={{border: '1px solid #6B9080', margin: 16}}>
            
            <div>
               {name} 
            </div>
            <Link to={`/detail/${name}`}>
                {urlInfo}
            </Link>
        </div>
    )
}
export default PokemonItem