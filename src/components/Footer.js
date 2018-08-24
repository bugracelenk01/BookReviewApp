import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavigationService from '../navigation/NavigationService';
class Footer extends Component {
	render() {
		return (
			<View style={{ height: 85, width: Dimensions.get('window').width ,backgroundColor: 'black', flexDirection: 'row', flexWrap: 'wrap', position: 'absolute', bottom: 0}}>
				<TouchableOpacity onPress={() => NavigationService.navigate('Stream')} style={{ marginTop: 20 ,position: 'absolute', left: '5%'}}>
					<Icon size={30} style={{ alignSelf: 'center'}} name='clock-o' color='#707070' />
					<Text style={{ color: '#fff', alignSelf: 'center' }}>Stream</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginTop: 20 ,position: 'absolute', left: '25%'}}>
					<Icon size={30} style={{ alignSelf: 'center'}} name='user' color='#707070' />
					<Text style={{ color: '#fff', alignSelf: 'center' }}>Friends</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ left: '45%', marginTop: 13 ,position:'absolute', backgroundColor: '#707070', height: 60, width: 60, borderRadius: 30}}>
					<Icon size={36} style={{ marginTop: 13,alignSelf: 'center'}} name='plus' color='black' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => NavigationService.navigate('Notifications')} style={{ marginTop: 20 ,position: 'absolute', right: '17%'}}>
					<Icon size={30} style={{ alignSelf: 'center'}} name='bell-o' color='#707070' />
					<Text style={{ color: '#fff', alignSelf: 'center' }}>Notifications</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginTop: 13, position: 'absolute', right: '3%'}}>
					<Image style={{ width: 38, height: 38, borderRadius: 19}} source={{ uri: 'https://randomuser.me/api/portraits/women/82.jpg'}}/>
					<Text style={{ color: '#fff', alignSelf: 'center' }}>Profile</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export {Footer};