import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNaviagtion from './BottomTabNaviagtion'
import MovieDetailScreen from '../screens/movies/MovieDetailsScreen'

const Stack = createStackNavigator()
const Router = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='home'>
    <Stack.Screen name='Home' component={BottomTabNaviagtion} options={{headerShown:false}}/>
    <Stack.Screen name='MovieDetailScreen' component={MovieDetailScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router