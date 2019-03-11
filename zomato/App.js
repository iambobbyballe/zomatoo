/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from "react-redux";
import store from './src/reduxs/store'


 
 
export default class App extends Component {
  render() {
    return (
      <View>
         <Provider store={store}>
        <Text>ok ok</Text>
        </Provider>
         </View>
    );
  }
}


