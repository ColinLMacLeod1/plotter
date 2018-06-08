import { ADD_HISTORY } from './constants'

const initialState = {
	history: [],
}
const reducer = function historyReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_HISTORY:
			return {
				history: [action.func, ...state.history],
			}
		default:
			return state
	}
}

export default reducer
