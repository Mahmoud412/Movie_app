import { View, Text , Image, TouchableOpacity , Pressable} from 'react-native'
import React , {useState , useEffect} from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const TopRatedMovies = () => {

    const [topRated , getTopRated] = useState([])

    const getTopRatedMovies = async ()=>{
        const respone = await  fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=5a890566bdcb7118ee21f39720e0a6d6&language=en-US')
        const data = await respone.json()
        getTopRated(data.results)
      }
  
  
      useEffect(()=>{
        getTopRatedMovies();
      },[])
      console.log(topRated)
  return (
    <FlatList
    numColumns={2}
      data={topRated}
      renderItem={({item ,index}) => (
        <TouchableOpacity>
        <Image
          style={{width: 220, height: 300}}
          source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}
        />
        </TouchableOpacity>
      )}
      keyExtractor={(item)=>item.id}
    />
  )
}

export default TopRatedMovies