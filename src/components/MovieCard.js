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

import {apiSlice, useGetMoviesQuery} from '../redux/api/apiSlice';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const MovieCard = () => {
  // const {data} = useGetMoviesQuery()
  const navigation = useNavigation()
  const numcloumns = useRef()
  const width = Dimensions.get('window').width;

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const respone = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=5a890566bdcb7118ee21f39720e0a6d6&language=en-US',
    );
    const data = await respone.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <FlatList
    numColumns={2}
      data={movies}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=>navigation.navigate('PopularDetailScreen' , item.id)}>
        <Image
          style={{width: 220, height: 300}}
          source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}
        />
        </TouchableOpacity>
      )}
      keyExtractor={(item)=> item.id}
    />
  );
};

export default MovieCard;
