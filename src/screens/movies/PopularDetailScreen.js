import { View, Text } from 'react-native'
import React from 'react'

const PopularDetailScreen = (props) => {
    const movieId = props.route.params
    console.log(movieId)
  return (
    <View>
      <Text>PopularDetailScreen</Text>
    </View>
  )
}

export default PopularDetailScreen