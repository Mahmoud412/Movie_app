import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNaviagtion from './BottomTabNaviagtion'
import PopularDetailScreen from '../screens/movies/PopularDetailScreen'
import TopRetedDetailScreen from '../screens/movies/TopRetedDetailScreen'


const Stack = createStackNavigator()
const Router = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={BottomTabNaviagtion} options={{headerShown:false}}/>
    <Stack.Screen name='PopularDetailScreen' component={PopularDetailScreen} options={{headerShown:false}}/>
    <Stack.Screen name='TopRatedDetailScreen' component={TopRetedDetailScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router