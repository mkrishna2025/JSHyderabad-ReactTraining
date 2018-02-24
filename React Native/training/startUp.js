
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Demo from './src/pages/demo1.js';
//import Demo from './src/pages/demo2.js';
//import Demo from './src/pages/demo3.js';

export default class StartUp extends Component {
  render() {
    return (
      <View>
          <Demo welcomeText="Welcome to Demo"/>
      </View>
    );
  }
}