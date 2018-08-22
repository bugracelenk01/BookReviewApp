import React, { Component } from 'react'
import { Text, TouchableOpacity} from 'react-native'

class Button extends Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
				<Text style={this.props.textStyle}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
}

export { Button };