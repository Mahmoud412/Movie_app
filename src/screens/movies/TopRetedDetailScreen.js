import { View, Text } from 'react-native'
import React , {useState , useEffect} from 'react'

const TopRetedDetailScreen = (props) => {
    const movieId = props.route.params
    const [movieById, setMovieById] = useState([])
    const getMovieById = async () => {
        const respone = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=5a890566bdcb7118ee21f39720e0a6d6&language=en-US`,
        );
        const data = await respone.json();
        setMovieById(data);
      };
    
      useEffect(() => {
        getMovieById();
      }, []);
    console.log(movieById)
  return (
    <View>
      <Text>TopRetedDetailScreen</Text>
    </View>
  )
}

export default TopRetedDetailScreen