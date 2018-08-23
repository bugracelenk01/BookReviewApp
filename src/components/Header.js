import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.backButton} onPress={this.props.goBack}>
					<Icon color={'#7A7B7C'} size={28} name='chevron-left' />
				</TouchableOpacity>
				<Text style={styles.headerTitle} >{this.props.headerTitle}</Text>
				{this.props.rightButton ? 
					<TouchableOpacity style={styles.rightButton} onPress={this.props.onPress}>
						<Icon color={'#7A7B7C'} size={28} name={this.props.name}/>
					</TouchableOpacity>
					: null
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		height: 75,
		width: Dimensions.get('window').width,
	},
	backButton: {
		position: 'absolute',
		left: 20,
		top: 30
	},
	rightButton: {
		position: 'absolute',
		right: 20,
		top: 30
	},
	headerTitle: {
		alignSelf: 'center',
		fontSize: 19,
		fontWeight: 'bold',
		color: '#fff',
		top: 30
	}
});

export { Header };