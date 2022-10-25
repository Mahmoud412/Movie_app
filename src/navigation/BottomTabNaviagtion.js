import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoritesScreen from '../screens/ButtomTabsScreens/FavoritesScreen'
import PopularScreen from '../screens/ButtomTabsScreens/PopularScreen'
import TopReatedScreen from '../screens/ButtomTabsScreens/TopReatedScreen'
import { color } from 'react-native-reanimated'



const Tab = createBottomTabNavigator()
const BottomTabNaviagtion = () => {
  return (
   <Tab.Navigator initialRouteName='Popular'>
    <Tab.Screen name='Favorites' component={FavoritesScreen}/>
    <Tab.Screen  name='Popular' component={PopularScreen} options={{
      headerStyle: {
        backgroundColor: '#1e2634',
      },
      headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
      },
    }}/>
    <Tab.Screen  name='Top Rated' component={TopReatedScreen}/>
   </Tab.Navigator>
  )
}

export default BottomTabNaviagtion