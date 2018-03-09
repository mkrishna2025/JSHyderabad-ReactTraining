
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import { Icon } from 'native-base';
import StartUpScreen from './src/containers/startup.js';
import LoginScreen from './src/containers/login.js';
import RegisterScreen from './src/containers/register.js';
import HomeScreen from './src/containers/home.js';
import NBScreen from './src/containers/nbscreen.js';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50
  }
});

const Navigations = StackNavigator({
  StartUp:{
    screen: StartUpScreen, 
    navigationOptions: 
    { 
      title: 'Startup', 
      headerLeft: <Image source={require('./logo.png')}  style  = {styles.stretch} resizeMode = "contain" /> ,
      headerRight: 
        <View style= {{flexDirection:"row",alignItems:"center",marginRight:15}}>
            <View>
              <Icon size={24} color="black" name="bell"/>
            </View>
            <View  style= {{marginLeft:10}}>
              <Icon size={24} color="black" name="email" />
            </View>
        </View>
    }
  },
  Login: {
    screen: LoginScreen, navigationOptions: { title: 'Login' }
  },
  Home: {
    screen: HomeScreen, navigationOptions: { title: 'Home' }
  },
  NB:{
    screen: NBScreen, navigationOptions: { title: 'NB' }
  }
}, {
    initialRouteName: 'StartUp'
  });

export default class App extends React.Component {
  render() {
    return <Navigations />;
  }
}