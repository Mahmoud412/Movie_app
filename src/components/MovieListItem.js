import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMAGE_POSTER_URL} from '../config';
import { useNavigation } from '@react-navigation/native';

const MovieListItem = (props ) => {
  const navigation = useNavigation()
  const movie = props.movie;
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MovieDetailScreen' , movie.id)}>
        <Image
          style={{width: 220, height: 300}}
          source={{uri: IMAGE_POSTER_URL + movie.poster_path}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MovieListItem;
