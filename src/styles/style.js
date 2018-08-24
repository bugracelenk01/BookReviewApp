import { StyleSheet, Dimensions } from 'react-native';

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
		width: '100%',
		borderRadius: 5,
		height: 44,
		marginTop: 24,

	},
  inputStyle: {
		height: '100%',
		color: '#fff',
		alignSelf: 'center'
	},
	inputWrapper: {
		width: '100%',
		backgroundColor: '#343741',
		height: 44,
		marginTop: 24,
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
	},
	scrollWrapper:{
		flexWrap: 'wrap',
		flexDirection:'row',
		borderBottomColor: '#696F84',
		borderBottomWidth: 1,
		width: Dimensions.get('window').width,
		paddingBottom: 10,
		paddingLeft: 40,
		paddingTop: 10,
	}
});

export { styles };
