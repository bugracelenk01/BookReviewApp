import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native'
import { Input, Button } from '../components'
import { Picker } from 'react-native-picker-dropdown'

export class Registiration extends Component {
	constructor(props){
		super(props);
		this.state={
			name: String,
			surname: String,
			language: String,
			birthDate: new Date(),
			password: String,
			confirmPassword: String
		}
	}
	handleChange({state, value}){
		this.setState({ [state]: value})
	}
	async openDatePicker(){
		try {
			DatePickerAndroid.open({
				// Use `new Date()` for current date.
				// May 25 2020. Month 0 is January.
				date: new Date(2020, 4, 25)
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				// Selected year, month (0-11), day
			}
		} catch ({code, message}) {
			console.warn('Cannot open date picker', message);
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
					<Text style={styles.welcomeText}>Registiration</Text>
					<Text style={styles.label}>Enter Your Name:</Text>
					<View style={styles.inputWrapper}>
						<Input
						onChangeText={text => this.setState({name: text})}
						value={this.state.email}
						style={styles.inputStyle}
						returnKey='next'
						/>
					</View>
					<Text style={styles.label}>Enter Your Surname:</Text>
					<View style={styles.inputWrapper}>
						<Input
						onChangeText={text => this.handleChange({surname, text})}
						value={this.state.surname}
						style={styles.inputStyle}
						returnKey='next'
						/>
					</View>
					<Text style={styles.label}>Select your Language:</Text>
					<Picker
						selectedValue={this.state.language}
						onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
						mode='dialog'
						prompt="Choose your favorite language"
						style={styles.inputWrapper}
						textStyle={styles.pickerText}
					>
						<Picker.Item label="English" value="en" />
						<Picker.Item label="Turkish" value="tr" />
					</Picker>
					<View style={{ borderColor: '#353946', borderWidth: 1, marginTop: 17, width: '100%'}}/>
					<Text style={styles.label}>Password:</Text>
					<View style={styles.inputWrapper}>
						<Input
						onChangeText={text => this.handleChange({password, text})}
						value={this.state.password}
						style={styles.inputStyle}
						returnKey='next'
						/>
					</View>
					<Text style={styles.label}>Repeat Password:</Text>
					<View style={styles.inputWrapper}>
						<Input
						onChangeText={text => this.handleChange({confirmPassword, text})}
						value={this.state.confirmPassword}
						style={styles.inputStyle}
						returnKey='done'
						/>
					</View>
					<Button
					title='Register'
					textStyle= {styles.buttonTextStyle}
					style={styles.buttonStyle}
					/>
				</KeyboardAvoidingView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	buttonTextStyle:{
		alignSelf: 'center',
		fontSize: 18,
		color:'#fff',
		marginTop: '3%',
	},
  container: {
    backgroundColor: '#23252D',
		height: Dimensions.get('window').height,
		alignSelf:'flex-end',
		width: Dimensions.get('window').width
	},
	welcomeText:{
		color: '#fff',
		fontSize: 36,
		marginBottom: 30
	},
  wrapper: {
    alignSelf: 'center',
    justifyContent:'center',
    width: '90%',
		alignItems: 'center',
		height: '100%'
  },
  buttonStyle: {
		backgroundColor: '#02A247',
		width: '95%',
		borderRadius: 5,
		height: 44,
		marginTop: 24,

	},
  inputStyle: {
		height: '100%',
		color: '#fff',
		alignSelf: 'center',
		width: '100%'
	},
	inputWrapper: {
		width: '95%',
		alignSelf:'center',
		backgroundColor: '#343741',
		height: 44,
		borderRadius: 5,
	},
	picker: {
    alignSelf: 'stretch',
    backgroundColor: 'cadetblue',
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 20,
    borderRadius: 10,
  },
  pickerText: {
		color: 'white',
		fontSize: 16
	},
	label: {
		fontSize: 16,
		color: '#fff',
		marginTop: 24,
		marginBottom: 5,
		alignSelf: 'flex-start',
		marginLeft: 10,
	}
})

export default Registiration