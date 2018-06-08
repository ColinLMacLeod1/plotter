import { SET_FUNCTION, FUNCTION_ERRORS } from './constants'

const initialState = {
	func: '',
	errors: [],
}
const reducer = function functionReducer(state = initialState, action) {
	switch (action.type) {
		case SET_FUNCTION:
			return {
				func: action.func,
				errors: state.errors,
			}
		case FUNCTION_ERRORS:
			return {
				func: state.func,
				errors: action.errors,
			}
		default:
			return state
	}
}

export default reducer
