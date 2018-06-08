import { SET_FUNCTION, FUNCTION_ERRORS, SET_FUNCTION_INPUT } from './constants'

export function setFunction(func, data) {
	return {
		type: SET_FUNCTION,
		func,
		data,
	}
}

export function funcErrors(errors) {
	return {
		type: FUNCTION_ERRORS,
		errors,
	}
}

export function setFunctionInput(funcvalue) {
	return {
		type: SET_FUNCTION_INPUT,
		funcvalue,
	}
}
