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
				xaxis: action.xaxis,
				yaxis: action.yaxis,
				tempx: '',
				tempy: '',
				errors: state.errors,
			}
		case AXIS_ERRORS:
			return {
				xaxis: state.xaxis,
				yaxis: state.yaxis,
				tempx: state.tempx,
				tempy: state.tempy,
				errors: action.errors,
			}
		case SET_TEMP_XAXIS:
			return {
				xaxis: state.xaxis,
				yaxis: state.yaxis,
				tempx: action.tempx,
				tempy: state.tempy,
				errors: [],
			}
		case SET_TEMP_YAXIS:
			return {
				xaxis: state.xaxis,
				yaxis: state.yaxis,
				tempx: state.tempx,
				tempy: action.tempy,
				errors: [],
			}
		default:
			return state
	}
}

export default reducer
