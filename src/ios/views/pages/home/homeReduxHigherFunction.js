import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../actions/configAction'

export default (Node, otherAction = {}) => {
	let mapDispatchToProps = (dispatch) => {
		return bindActionCreators(
			Object.assign(actions, otherAction),
			dispatch
		)
	};
	return connect((state) => {
		return { ...state }
	}, mapDispatchToProps)(Node);
};