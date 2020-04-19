import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './helpers/store';
import Router from './routes';


const store = configureStore();

export default function App() {
  return (
    <Provider store = {store}>
      <Router />
    </Provider>
  );
}

  