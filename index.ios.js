import React, { Component } from 'react';
import {
	Text,
	AppRegistry,
} from 'react-native';
import Home from './src/ios/views/pages/home'
import { Provider } from 'react-redux';
import configureStore from './src/ios/store';

const store = configureStore();

export default class ReduxCounter extends Component {

	render() {
		return (
            <Provider store={store}>
              <Home />
            </Provider>
		);
	}
}

AppRegistry.registerComponent('coApp', () => ReduxCounter);
