import { View, Text, SafeAreaView, ScrollView , Image } from 'react-native'
import React ,{useState , useEffect} from 'react'

import { apiSlice, useGetMoviesQuery } from '../redux/api/apiSlice'
import { useDispatch } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'

const MovieCard = () => {
    // const {data} = useGetMoviesQuery()
    
    const [movies , setMovies] = useState([])
    
    const getMovies = async ()=>{
      const respone = await  fetch('https://api.themoviedb.org/3/movie/popular?api_key=5a890566bdcb7118ee21f39720e0a6d6&language=en-US')
      const data = await respone.json()
      setMovies(data.results)
    }


    useEffect(()=>{
      getMovies();
    },[])
    console.log(movies)
  return (
   <ScrollView>
   {movies.map((movie)=>(
    <View>
    <Image  style={{width:'100%' , height:400}} source={{uri:"https://image.tmdb.org/t/p/w500"+movie.poster_path}}/>
    
    </View>
   ))}

   </ScrollView>
  )
}

export default MovieCard