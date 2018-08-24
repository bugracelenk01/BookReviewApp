import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Notif, Footer } from '../components';
import { styles } from '../styles/style';

class Notifications extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header
					headerTitle='Notifications'
					rightButton={true}
					name='cog'
					onPress={() => alert('settings')}
					goBack={() => this.props.navigation.goBack()}
				/>
				<ScrollView style={{ position: 'absolute', top: 85, width: '100%', height: '75%', left: 25 }}>
					<Notif
						profileImg='https://randomuser.me/api/portraits/women/48.jpg'
						userName='Celina Turner'
						date='today at 11:02 AM'
						type='Like'
						notifMessage='your recommendation for book'
						notifFooterMessage='T is for transformation'
						normal={true}
						icon='heart'
					/>
					<Notif
						profileImg='https://randomuser.me/api/portraits/men/80.jpg'
						userName='Raymond Fleming'
						date='today at 10:43 AM'
						type='Added'
						notifMessage='you to his friends'
						notifFooterMessage='View all Raymonds friends'
						normal={false}
						icon='user'
					/>
					<Notif
						profileImg='https://randomuser.me/api/portraits/men/41.jpg'
						userName='Donald Snyder'
						date='yesterday at 11:21 PM'
						type='Bookmark'
						notifMessage='your recomendation for book'
						notifFooterMessage='The Goddess revolution'
						normal={true}
						icon='bookmark'
					/>
					<Notif
						profileImg='https://randomuser.me/api/portraits/men/41.jpg'
						userName='Donald Snyder'
						date='yesterday at 11:20 PM'
						type='Bookmark'
						notifMessage='your recomendation for book'
						notifFooterMessage='The Big Picture'
						normal={true}
						icon='bookmark'
					/>
				</ScrollView>
				<Footer />
			</View>
		);
	}
}

export { Notifications };