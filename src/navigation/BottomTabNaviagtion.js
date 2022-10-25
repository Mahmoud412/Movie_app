import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoritesScreen from '../screens/ButtomTabsScreens/FavoritesScreen'
import PopularScreen from '../screens/ButtomTabsScreens/PopularScreen'
import TopReatedScreen from '../screens/ButtomTabsScreens/TopReatedScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator()
const BottomTabNaviagtion = () => {
  return (
   <Tab.Navigator initialRouteName='Popular' tabBarOptions={{
    activeTintColor: '#151c25',
  }}>
    <Tab.Screen name='Favorites' component={FavoritesScreen} options={{
      headerStyle: {
        backgroundColor: '#1e2634',
      },
      headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
      },
      tabBarIcon:({color})=>(
        <AntDesign name='heart' size={25} color={color}/>
      ),
    }}/>
    <Tab.Screen  name='Popular' component={PopularScreen} options={{
      headerStyle: {
        backgroundColor: '#1e2634',
      },
      headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
      },
      tabBarIcon: ({color}) => (
        <FontAwesome name={'firefox'} size={25} color={color}/>
      ),
    }}/>
    <Tab.Screen  name='Top Rated' component={TopReatedScreen} options={{
      headerStyle: {
        backgroundColor: '#1e2634',
      },
      headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
      },
      tabBarIcon:({color})=>(
        <Ionicons name='trophy' size={25} color={color}/>
      )
    }}/>
   </Tab.Navigator>
  )
}

export default BottomTabNaviagtion