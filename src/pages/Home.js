import { useEffect, useState } from 'react';
import { getPokemonList } from '../services'
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import styles from './home.module.css'


function Home() {
    const [state, setState] = useState([])


    useEffect(() => {
        getPokemonList().then((data) => setState(data.results))
    }, [])

    return (
        <div className={styles.container}>
            <List
                itemLayout="horizontal"
                dataSource={state}
                renderItem={pokemon => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/133704119/original/798ab218286c66085499f6e6c9e705b209e2b11c/answer-all-of-pokemon-questions.png" />}
                            title={<Link to={`/detail/${pokemon.name}`}>{pokemon.url}</Link>}
                            description={pokemon.name}
                        />
                    </List.Item>

                )}
            />
        </div>
    )
}
export default Home