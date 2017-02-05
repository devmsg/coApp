import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'
import Redux from './home/homeReduxHigherFunction'

@Redux
class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {};
	}

	_handleChange() {
		const { configAction } = this.props;
		configAction();
	}

	render() {
		const { configReducer } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome} onPress={this._handleChange.bind(this)}>
					{configReducer.title}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome  : {
		fontSize : 20,
		textAlign: 'center',
		margin   : 10,
	}
});


export default Node;