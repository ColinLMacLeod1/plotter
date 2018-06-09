import {
	SET_FUNCTION,
	FUNCTION_ERRORS,
	SET_FUNCTION_INPUT,
	SET_DATA,
} from './constants'

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

export function setFunctionInput(funcvalue) {
	return {
		type: SET_FUNCTION_INPUT,
		funcvalue,
	}
}

export function setData(data) {
	return {
		type: SET_DATA,
		data,
	}
}
