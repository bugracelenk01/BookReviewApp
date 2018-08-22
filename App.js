/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from './src/screens/Welcome.js';
import Registiration from './src/screens/Registiration.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  Welcome:{
    screen: Welcome,
	},
	Registiration: {
		screen: Registiration
	}
}, {
  initialRouteName: 'Welcome',
  headerMode: 'none'
})
