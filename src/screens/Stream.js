import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Header, Footer, StreamPost } from '../components';
import { styles } from '../styles/style';

class Stream extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header
		 			goBack={() => this.props.navigation.goBack()}
		 			headerTitle='Stream'
		 			rightButton={true}
		 			onPress={() => alert('search')}
		 			name='search'
				/>
				<ScrollView style={{ position: 'absolute', top: 85, width: '100%', height: '75%', left: 25 }}>
					<StreamPost
						profileImg = 'https://randomuser.me/api/portraits/women/48.jpg'
						date='june 04'
						type='wistfulness'
						userName='Anna Smithnick'
						normal={true}
						bookImageSource='https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930'
						bookReview='I know Shaun T as the tough love motivator and butt kicker behind my favorite workout videos. His workouts are HARD, but I always feel amazing after them—I can’t believe...'
						bookName='T is for Transformation'
						bookmarked='12'
						liked='13'
						shared='2'
					/>
					<StreamPost
						profileImg = 'https://randomuser.me/api/portraits/women/48.jpg'
						date='june 04'
						type='wistfulness'
						userName='Anna Smithnick'
						normal={true}
						bookImageSource='https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930'
						bookReview='I know Shaun T as the tough love motivator and butt kicker behind my favorite workout videos. His workouts are HARD, but I always feel amazing after them—I can’t believe...'
						bookName='T is for Transformation'
						bookmarked='12'
						liked='13'
						shared='2'
					/>
					<StreamPost
						profileImg = 'https://randomuser.me/api/portraits/women/48.jpg'
						date='june 04'
						type='wistfulness'
						userName='Anna Smithnick'
						normal={true}
						bookImageSource='https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930'
						bookReview='I know Shaun T as the tough love motivator and butt kicker behind my favorite workout videos. His workouts are HARD, but I always feel amazing after them—I can’t believe...'
						bookName='T is for Transformation'
						bookmarked='12'
						liked='13'
						shared='2'
					/>
					<StreamPost
						profileImg = 'https://randomuser.me/api/portraits/women/48.jpg'
						date='june 04'
						type='wistfulness'
						userName='Anna Smithnick'
						normal={true}
						bookImageSource='https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930'
						bookReview='I know Shaun T as the tough love motivator and butt kicker behind my favorite workout videos. His workouts are HARD, but I always feel amazing after them—I can’t believe...'
						bookName='T is for Transformation'
						bookmarked='12'
						liked='13'
						shared='2'
					/>
				</ScrollView>
				<Footer />
			</View>
		);
	}
}

export default Stream;