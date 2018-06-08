import {
	SET_AXES,
	AXIS_ERRORS,
	SET_TEMP_XAXIS,
	SET_TEMP_YAXIS,
} from './constants'

export function setAxes(xaxis, yaxis) {
	return {
		type: SET_AXES,
		xaxis,
		yaxis,
	}
}

export function axisError(errors) {
	return {
		type: AXIS_ERRORS,
		errors,
	}
}

export function setTempXAxis(tempx) {
	return {
		type: SET_TEMP_XAXIS,
		tempx,
	}
}

export function setTempYAxis(tempy) {
	return {
		type: SET_TEMP_YAXIS,
		tempy,
	}
}
