import React, { Component} from 'react';
import { TextInput } from 'react-native'

class Input extends Component {
  constructor(props) {
		super(props);
  }

  render() {
    return (
			<TextInput
			placeholder={this.props.placeholder}
			onChangeText={this.props.onChangeText}
			value={this.props.value}
			style={this.props.style}
			placeholderTextColor='#6D6F76'
			returnKeyType={this.props.returnKey}
			secureTextEntry={this.props.password}
			onSubmitEditing={this.props.onSubmitEditing}
			/>
    );
  }
}

export { Input };
