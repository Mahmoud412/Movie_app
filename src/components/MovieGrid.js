import {View, Text, FlatList} from 'react-native';
import React from 'react';
import MovieListItem from './MovieListItem';

const MovieGrid = props=> {
  const movies = props.movies;
  return (
    <FlatList
      numColumns={2}
      data={movies}
      renderItem={({item}) => (
        <MovieListItem movie={item} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default MovieGrid;
