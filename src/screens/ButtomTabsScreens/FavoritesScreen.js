import {View, Text} from 'react-native';
import React from 'react';
import {apiSlice, useGetMoviesQuery} from '../../redux/api/apiSlice';
import {useSelector} from 'react-redux';
import {selectFavoritMovies} from '../../redux/features/favoritSlice';
import MovieGrid from '../../components/MovieGrid';
const FavoritesScreen = () => {
  const {data} = useGetMoviesQuery();
  const movies = useSelector(state => selectFavoritMovies(state));
  console.log(movies);
  return <MovieGrid movies={movies} />;
};

export default FavoritesScreen;
