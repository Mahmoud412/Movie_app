import { View, Text } from 'react-native'
import React , {useState , useEffect} from 'react'
import TopRatedMovieDetail from '../../components/MovieDetails/TopRatedMovieDetail'

const TopRetedDetailScreen = (props) => {
    const movieId = props.route.params
    
  return (
    <View>
      <TopRatedMovieDetail movieId = {movieId}/>
    </View>
  )
}

export default TopRetedDetailScreen