import {
	SET_FUNCTION,
	FUNCTION_ERRORS,
	SET_FUNCTION_INPUT,
	SET_DATA,
} from './constants'
import refreshData from '../lib/refreshData'

const initialData = refreshData('x^2', [-2.5, 2.5], [0, 5])

const initialState = {
	func: 'x^2',
	data: initialData,
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
				errors: [],
			}
		case FUNCTION_ERRORS:
			return {
				...state,
				errors: action.errors,
			}
		case SET_FUNCTION_INPUT:
			return {
				...state,
				funcvalue: action.funcvalue,
			}
		case SET_DATA:
			return {
				...state,
				data: action.data,
			}
		default:
			return state
	}
}

export default reducer
