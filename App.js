

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';

import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './src/redux/api/apiSlice';

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
    <HomeScreen/>
    </ApiProvider>
   
  );
};


export default App;
