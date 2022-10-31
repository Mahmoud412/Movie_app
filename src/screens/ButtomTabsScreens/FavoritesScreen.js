import { View, Text } from 'react-native'
import React from 'react'
import { apiSlice, useGetMoviesQuery } from '../../redux/api/apiSlice'
const FavoritesScreen = () => {
    const {data} = useGetMoviesQuery()

  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  )
}

export default FavoritesScreen