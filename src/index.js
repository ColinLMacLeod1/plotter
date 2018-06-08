import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import IndexReducer from './index-reducer'

// composeSetup allows for redux devtool in-browser
const composeSetup =
	process.env.NODE_ENV !== 'production' &&
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose

// creating the redux store
const store = createStore(IndexReducer, composeSetup())

// Rendering the app and providing it with the redux store
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
