import { ADD_HISTORY } from './constants'

const action = function action(func) {
	return {
		type: ADD_HISTORY,
		func,
	}
}

export default action
