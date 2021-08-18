import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {View} from 'react-native';
import LoginScreen from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreen},
  ExchangeScreen: {screen: ExchangeScreen},
});
const SwitchNavigation = createSwitchNavigator({
  WelcomeScreen:{screen: LoginScreen},
  TabNavigator: {screen:TabNavigator}
})

const AppContainer =  createAppContainer(SwitchNavigation);