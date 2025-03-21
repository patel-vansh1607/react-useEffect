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
             <h2>Pokémon Characters</h2>
            <ul>
                {data.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
        
}

export default Poki;