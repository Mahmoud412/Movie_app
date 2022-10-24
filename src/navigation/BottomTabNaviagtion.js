import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoritesScreen from '../screens/ButtomTabsScreens/FavoritesScreen'
import PopularScreen from '../screens/ButtomTabsScreens/PopularScreen'
import TopReatedScreen from '../screens/ButtomTabsScreens/TopReatedScreen'



const Tab = createBottomTabNavigator()
const BottomTabNaviagtion = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name='Favorites' component={FavoritesScreen}/>
    <Tab.Screen  name='Popular' component={PopularScreen}/>
    <Tab.Screen  name='Top Rated' component={TopReatedScreen}/>
   </Tab.Navigator>
  )
}

export default BottomTabNaviagtion