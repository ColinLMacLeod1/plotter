import { combineReducers } from 'redux'
import axis from './axis/reducer'
import func from './func/reducer'
import history from './history/reducer'

const IndexReducer = combineReducers({
	axis,
	func,
	history,
})

export default IndexReducer
