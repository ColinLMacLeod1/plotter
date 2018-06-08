import {
	SET_AXES,
	AXIS_ERRORS,
	SET_TEMP_XAXIS,
	SET_TEMP_YAXIS,
} from './constants'

const initialState = {
	xaxis: [-1, 1],
	yaxis: [-1, 1],
	tempx: '',
	tempy: '',
	errors: [],
}
const reducer = function axisReducer(state = initialState, action) {
	switch (action.type) {
		case SET_AXES:
			return {
				...state,
				xaxis: action.xaxis,
				yaxis: action.yaxis,
				tempx: '',
				tempy: '',
			}
		case AXIS_ERRORS:
			return {
				...state,
				errors: action.errors,
			}
		case SET_TEMP_XAXIS:
			return {
				...state,
				tempx: action.tempx,
				errors: [],
			}
		case SET_TEMP_YAXIS:
			return {
				...state,
				tempy: action.tempy,
				errors: [],
			}
		default:
			return state
	}
}

export default reducer
