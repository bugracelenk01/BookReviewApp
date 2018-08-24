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
import Registiration from './src/screens/Registiration.js';
import { Notifications } from './src/screens/Notifications';
import Stream from './src/screens/Stream';
import NavigationService from './src/navigation/NavigationService';
export default class App extends Component{
	render() {
		return (
			<AppNavigator
				ref={navigatorRef => {
					NavigationService.setTopLevelNavigator(navigatorRef);
				}}
			/>
		);
	}
}

const AppNavigator = createStackNavigator({
 	Welcome:{
		screen: Welcome,
	},
	Registiration: {
		screen: Registiration
	},
	Notifications:{
		screen: Notifications
	},
	Stream: {
		screen: Stream
	}
}, {
	initialRouteName: 'Welcome',
	headerMode: 'none'
});
