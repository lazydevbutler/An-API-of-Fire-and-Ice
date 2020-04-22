import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './helpers/store';
import Router from './routes';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const store = configureStore();

export default class App extends Component {
  render(){
  return (
    <Provider store = {store}>
      <Router />
    </Provider>
  );
}
}

  