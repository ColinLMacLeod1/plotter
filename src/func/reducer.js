import { SET_FUNCTION, FUNCTION_ERRORS, SET_FUNCTION_INPUT } from './constants'

const initialState = {
	func: 'x^2',
	data: [0, 1],
	errors: [],
	funcvalue: '',
}
const reducer = function functionReducer(state = initialState, action) {
	switch (action.type) {
		case SET_FUNCTION:
			return {
				func: action.func,
				errors: state.errors,
				data: action.data,
				funcvalue: '',
			}
		case FUNCTION_ERRORS:
			return {
				func: state.func,
				errors: action.errors,
				data: state.data,
				funcvalue: state.funcvalue,
			}
		case SET_FUNCTION_INPUT:
			return {
				func: state.func,
				errors: action.errors,
				data: state.data,
				funcvalue: action.funcvalue,
			}
		default:
			return state
	}
}

export default reducer
