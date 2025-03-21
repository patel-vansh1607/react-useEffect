import { useEffect , useState} from "react"

const Poki = () => {
    const [data, setData] = useState([])
    const[url, setUrl] = useState`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`

    const fetchPokemon = (offset) => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data.results))
        .catch(error => console.log("error fetching", error))
    }
    const handleNext = () =>{
        setOffset(prev => prev += 20)
    }
    const handlePrevious = () =>{
        setOffset(prev => prev += 20)
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
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Poki;