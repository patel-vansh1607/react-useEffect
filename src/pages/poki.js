import { useEffect , useState} from "react"

const Poki = () => {
    const [data, setData] = useState([])

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(res => res.json())
        .then(data => setData(data.results))
        .catch(error => console.log("error fetching", error))
    }

    useEffect (() => {
        fetchPokemon()
    }, [] )
    return(
        <div>
             <h2>Pokemon Characters</h2>
            <ul>
                {data.map((pokemon, index) => (
                    <li 
                        key={index}>{pokemon.name} {/* this will display the names */}
                        key={index} {pokemon.url} {/*  i added the url here */}

                    </li>
                ))}
            </ul>
        </div>
    );
        
}

export default Poki;