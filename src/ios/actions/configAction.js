import{
	GET_CONFIG_INFO,
} from '../constants/actionTypes'

export function configAction() {
	return dispatch => {
		dispatch({
			type: GET_CONFIG_INFO,
			data: "Hello ThinkCMF",
			mark:"修改标题"
		});
	}
}

