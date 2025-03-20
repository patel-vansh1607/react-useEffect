import { useEffect , useState} from "react"

const Poki = () => {
    const [data, setData] = useState([])

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log("error fetching", error))
    }

    useEffect (() => {
        fetchPokemon()
    }, [] )
    return(
        <div>

        </div>
    );
        
}

export default Poki;