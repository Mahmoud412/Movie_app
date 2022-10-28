import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';


import {FlatList} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {GET} from '../Services/API'
import { IMAGE_POSTER_URL } from '../config';
import Loader from './Loader';
const MovieCard = (props) => {
  // const {data} = useGetMoviesQuery()
  const navigation = useNavigation()

  const [movies, setMovies] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    const getMovies = async ()=>{
      const respone = await GET('/movie/popular')
      setMovies(respone.results)
      setLoading(false)
    }

    getMovies();
  },[])
  return (
   <>
   {loading ? (<Loader/>):(
    <FlatList
    numColumns={2}
      data={movies}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=>navigation.navigate('PopularDetailScreen' , item.id)}>
        <Image
          style={{width: 220, height: 300}}
          source={{uri: IMAGE_POSTER_URL + item.poster_path}}
        />
        </TouchableOpacity>
      )}
      keyExtractor={(item)=> item.id}
    />
   )}
    
    </>
  );
};

export default MovieCard;
