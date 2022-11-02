import React, {useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {GET} from '../../Services/API';
import MovieGrid from '../MovieGrid';
import Loader from '../Loader';
const MovieCard = props  => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
   const navigation = useNavigation()
  const navScreen = navigation.navigate('PopularDetailScreen')
  
  useEffect(() => {
    const getMovies = async () => {
      const respone = await GET('/movie/popular');
      setMovies(respone.results);
      setLoading(false);
    };

    getMovies();
  }, []);
  return <>{loading ? <Loader /> : <MovieGrid movies={movies}   movieId = {movies.id} />}</>;
};

export default MovieCard;
