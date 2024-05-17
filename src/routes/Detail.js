import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

function Detail()
{
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movies,setMovies] =useState([])
    const getMovie = async () => { 
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setMovies(json.data.movie)
        setLoading(false)
        console.log(json)
    }
    useEffect(() => { 
    getMovie()
    },[])
    return (
        <div>
            {loading ? (<h2>Loaing...</h2>) : (
                <div>
                    <img src={movies.large_cover_image} />
                    <h1>{movies.title_long}</h1>
                    <small>{movies.rating}/10</small>
                    <small>{movies.year}</small>
                    <small>{movies.runtime} minutes </small>
                    <p>{movies.description_full}</p>
                </div>
            )}
        </div>
    )
}
export default Detail