import { View, Text } from 'react-native'
import React from 'react'
import PopularMovieDetail from '../../components/MovieDetails/PopularMovieDetail'

const PopularDetailScreen = (props) => {
  const movieId= props.route.params

  return (
    <View>
    <PopularMovieDetail movieId={movieId}/>
    </View>
  )
}

export default PopularDetailScreen