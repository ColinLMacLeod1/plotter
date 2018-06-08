import { SET_XAXIS, SET_YAXIS, AXIS_ERRORS } from './constants'

export function setXAxis(xaxis) {
	return {
		type: SET_XAXIS,
		xaxis,
	}
}

export function setYAxis(yaxis) {
	return {
		type: SET_YAXIS,
		yaxis,
	}
}

export function axisError(error) {
	return {
		type: AXIS_ERRORS,
		error,
	}
}
