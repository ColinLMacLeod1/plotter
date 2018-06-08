import { SET_XAXIS, SET_YAXIS, AXIS_ERRORS } from './constants'

const initialState = {
	xaxis: 10,
	yaxis: 10,
	errors: [],
}
const reducer = function axisReducer(state = initialState, action) {
	switch (action.type) {
		case SET_XAXIS:
			return {
				xaxis: action.xaxis,
				yaxis: state.yaxis,
				errors: state.errors,
			}
		case SET_YAXIS:
			return {
				xaxis: state.xaxis,
				yaxis: action.yaxis,
				errors: state.errors,
			}
		case AXIS_ERRORS:
			return {
				xaxis: state.xaxis,
				yaxis: state.yaxis,
				errors: action.errors,
			}
		default:
			return state
	}
}

export default reducer
