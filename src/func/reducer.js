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
				...state,
				func: action.func,
				data: action.data,
				funcvalue: '',
			}
		case FUNCTION_ERRORS:
			return {
				...state,
				errors: action.errors,
			}
		case SET_FUNCTION_INPUT:
			return {
				...state,
				errors: action.errors,
				funcvalue: action.funcvalue,
			}
		default:
			return state
	}
}

export default reducer
