import {
	GET_CONFIG_INFO,
} from '../constants/actionTypes'

const defaultState = {
	title: "ThinkCMF"
};

export default (state = defaultState, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case GET_CONFIG_INFO:
			newState.title = action.data;
			break;
	}
	return newState;
}