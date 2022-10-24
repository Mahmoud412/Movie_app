

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';

import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
    <HomeScreen/>
    </Provider>
   
  );
};


export default App;
