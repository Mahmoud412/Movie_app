import { View, Text } from 'react-native'
import React , {useState , useEffect} from 'react'

const TopRatedMovieDetail = ({movieId}) => {
    const id = movieId
    const [movieById, setMovieById] = useState([])
    const getMovieById = async () => {
        const respone = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=5a890566bdcb7118ee21f39720e0a6d6&language=en-US`,
        );
        const data = await respone.json();
        setMovieById(data , {id:id});
      };
    
      useEffect(() => {
        getMovieById();
      }, []);
      const array = Object.values( movieById )
  return (
    
    <View>
    { array &&array.map((movie)=>(
      <Text>{movie.name}</Text>
    
     ))}
    </View>
  )
}

export default TopRatedMovieDetail