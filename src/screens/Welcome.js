import React, { Component} from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { styles } from '../styles/style.js'; 
import { Input, Button } from '../components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  emailChanged(email){
    this.setState({ email })
  }
  passwordChanged(password){
    this.setState({ password })
	}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.welcomeText}>Welcome To</Text>
          <Text style={styles.welcomeText}>BookReviewApp</Text>
					<View style={styles.inputWrapper}>
						<Input
						placeholder='Your Email Adress'
						onChangeText={this.emailChanged.bind(this)}
						value={this.state.email}
						style={styles.inputStyle}
						returnKey='next'
					  password={false}
						/>
					</View>
					<View style={styles.inputWrapper}>
						<Input
						placeholder='Your Password'
						onChangeText={this.passwordChanged.bind(this)}
						value={this.state.password}
						style={styles.inputStyle}
						returnKey='done'
						onSubmitEditing={() => alert('Login successful !')}
					  password={true}
						/>
					</View>
					<Button
					title='Login'
					textStyle= {styles.buttonTextStyle}
					style={styles.buttonStyle}
					onPress={() => this.props.navigation.navigate('Stream')}
					/>
					<View style={{ borderColor: '#353946', borderWidth: 1, marginTop: 17, width: '100%'}}/>
					<Button
					textStyle={{
						alignSelf: 'center',
						fontSize: 18,
						color:'#fff',
						marginTop: '3%',
						textDecorationLine: "underline",
						textDecorationStyle: "solid",
						textDecorationColor: "#fff",
					}}
					title='Forgot your passsword ?'
					/>
					<View style={{ borderColor: '#353946', borderWidth: 1, marginTop: 17, width: '100%'}}/>
					<View style={{ marginTop: 50, marginBottom: '10%'}}>
						<View style={{ display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
							<View style={{ marginTop: '2%',marginRight: '3%',backgroundColor: '#6D6F76', borderRadius: 50, width: 24, height: 24, alignContent: 'center', alignItems: 'center'}}>
								<Icon name='linkedin' color='#23252D' style={{ marginTop: '25%'}}/>
							</View>
							<Button
							textStyle={{
								alignSelf: 'center',
								fontSize: 18,
								color:'#fff',
								marginTop: '3%',
								textDecorationLine: "underline",
								textDecorationStyle: "solid",
								textDecorationColor: "#fff",
							}}
							title='Login with Linkedin'
							/>
						</View>
						<View style={{ display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
							<View style={{ marginTop: '2%',marginRight: '3%',backgroundColor: '#6D6F76', borderRadius: 50, width: 24, height: 24, alignContent: 'center', alignItems: 'center'}}>
								<Icon name='facebook' color='#23252D' style={{ marginTop: '25%'}}/>
							</View>
							<Button
							textStyle={{
								alignSelf: 'center',
								fontSize: 18,
								color:'#fff',
								marginTop: '3%',
								textDecorationLine: "underline",
								textDecorationStyle: "solid",
								textDecorationColor: "#fff",
							}}
							title='Login up with Facebook'
							/>
						</View>
					</View>
					
				<Button
					textStyle={{
						alignSelf: 'center',
						fontSize: 18,
						color:'#fff',
						marginTop: '3%',
						textDecorationLine: "underline",
						textDecorationStyle: "solid",
						textDecorationColor: "#fff",
					}}
					onPress={() => this.props.navigation.navigate('Registiration')}
					title={`Don't Have An Account ?`}
					/>
        </View>
      </View>
    );
  }
}

export default Welcome;
