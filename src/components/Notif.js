import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Notif extends Component {
	render() {
		const { profileImg, userName, date, type, notifMessage, notifFooterMessage, normal, icon } = this.props;
		return (
			<View style={styles.notifWrapper}>
				<Image source={{ uri: profileImg }} style={styles.image}/>
				<View>
					<TouchableOpacity><Text style={{ fontSize: 19, color: '#fff', textDecorationLine:'underline', textDecorationStyle:'solid', textDecorationColor:'#fff'}}>{userName}</Text></TouchableOpacity>
					<Text style={{color: '#A7A7A7'}}>{date}</Text>
					<Text style={{ fontSize: 14, color: '#fff'}}><Icon color= '#A7A7A7' size={14} name={icon}/> <Text style={{ fontSize: 14, color: '#78FECC'}}>{type}</Text> {notifMessage}</Text>
					<TouchableOpacity><Text style={{ color: normal ? '#A7A7A7' : '#FF8000' , textDecorationLine:'underline', textDecorationStyle:'solid', textDecorationColor:normal ? '#A7A7A7' : '#FF8000'}}>{notifFooterMessage}</Text></TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image:{
		right: 10,
		width:48,
		height: 48,
		borderRadius: 24,
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
	},
	notifWrapper:{
		flexWrap: 'wrap',
		flexDirection:'row',
		borderBottomColor: '#696F84',
		borderBottomWidth: 1,
		width: Dimensions.get('window').width,
		paddingBottom: 10,
		paddingLeft: 40,
		paddingTop: 10
	}
});

export { Notif };