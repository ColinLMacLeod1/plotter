import { SET_FUNCTION, FUNCTION_ERRORS } from './constants'

export function setFunction(func) {
	return {
		type: SET_FUNCTION,
		func,
	}
}

export function funcErrors(errors) {
	return {
		type: FUNCTION_ERRORS,
		errors,
	}
}
