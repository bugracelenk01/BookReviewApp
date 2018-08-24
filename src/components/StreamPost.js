import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
class StreamPost extends Component {
	render() {
		const { profileImg, date, userName, type, bookName, bookImageSource, bookReview, bookmarked, liked, shared } = this.props;
		return (
			<View style={styles.wrapper}>
				<View style={styles.streamHeader}>
					<Image source={{ uri: profileImg }} style={styles.image}/>
					<View style={styles.userNameStyle}>
						<TouchableOpacity><Text style={{ paddingBottom: 5 ,fontSize: 16, color: '#fff', textDecorationColor:'#fff', textDecorationStyle:'solid', textDecorationLine: 'underline'}}>{userName}</Text></TouchableOpacity>
						<Text style={{ color: this.props.normal ? '#78FECC' : '#FEA178'}}>{type}</Text>
					</View>
					<View style={{ backgroundColor: '#2E313B',position:'absolute', right: 10,}}>
						<Text style={styles.dateStyle}>{date}</Text>
					</View>
				</View>
				<Text style={{ paddingTop: 10, paddingBottom: 10, color: '#7D8D9B', textDecorationColor:'#7D8D9B', textDecorationStyle:'solid', textDecorationLine: 'underline' }}>{bookName}</Text>
				<View style={styles.information}>
					<Image style={styles.bookImage} source={{ uri: bookImageSource}}/>
					<Text style={{ color:'#fff', maxWidth: 240, marginLeft: 20}}>{bookReview}</Text>
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity><Text style={{ fontSize: 20, color: '#fff', marginLeft: 30}}><Icon style={{paddingLeft: 5}} size={30} color='#6D6F76' name='bookmark'/>{bookmarked}</Text></TouchableOpacity>
					<TouchableOpacity><Text style={{ fontSize: 20, color: '#fff', marginLeft: 60}}><Icon style={{paddingLeft: 5}} size={30} color='#6D6F76' name='heart'/>{liked}</Text></TouchableOpacity>
					<TouchableOpacity><Text style={{ fontSize: 20, color: '#fff', marginLeft: 60}}><Icon style={{paddingLeft: 5}} size={30} color='#6D6F76' name='share-alt'/>{shared}</Text></TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttons:{
		paddingTop: 8,
		borderRadius: 10,
		backgroundColor: '#2E313B',
		flexWrap: 'wrap',
		flexDirection: 'row',
		height: 50,
		marginTop: 5
	},
	information: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	bookImage: {
		width: 60,
		height: 90,
		marginLeft: 5,
		shadowColor: 'black',
		shadowOffset: {width:3,height:3}
	},
	wrapper: {
		width: '90%',
		marginBottom: 20
	},
	image:{
		right: 10,
		width:48,
		height: 48,
		borderRadius: 24,
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
	},
	streamHeader:{
		flexWrap: 'wrap',
		flexDirection:'row',
		borderBottomColor: '#696F84',
		borderBottomWidth: 1,
		width: '100%',
		paddingBottom: 10,
		paddingLeft: 10
	},
	dateStyle: {
		color: '#fff',
		padding: 10,
		borderRadius: 50
	}
});

export { StreamPost };