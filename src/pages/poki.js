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
            <ol>
                {data.map((pokemon, index) => (
                    <li
                        key={index}>{pokemon.name}  {/* this will display the names */}
                        {/*URL = {pokemon.url} {/* this will display the URL */}                 
                </li>
                ))}
            </ol>
            <button>Previous</button>
            <button>Next</button>

        </div>
    );
}

export default Poki;