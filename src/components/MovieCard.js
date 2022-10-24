import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { useGetMoviesQuery } from '../redux/api/apiSlice'

const MovieCard = () => {
    const {data ,error,isLoding} = useGetMoviesQuery()
    let content = JSON.stringify(data)
  return (
    <View>
      <Text>{content}</Text>
    </View>
  )
}

export default MovieCard