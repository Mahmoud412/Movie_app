import { View} from 'react-native'
import React from 'react'
import ShowMovieDetails from '../../components/MovieDetails/ShowMovieDetails'

const MovieDetailScreen = (props) => {
  const movieId= props.route.params

  return (
    <View>
    <ShowMovieDetails movieId={movieId}/>
    </View>
  )
}

export default MovieDetailScreen