import { View, Text } from 'react-native'
import React from 'react'
import { apiSlice, useGetMoviesQuery } from '../../redux/api/apiSlice'
import { useSelector } from 'react-redux'
import { selectFavoritMovie } from '../../redux/features/favoritSlice'
const FavoritesScreen = () => {
    const {data} = useGetMoviesQuery()

    const movie = useSelector(selectFavoritMovie)

    console.log(movie)

  return (
    <View>
   
    </View>
  )
}

export default FavoritesScreen