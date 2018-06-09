import React from 'react'
import logo from './logo.svg'
import './App.css'
import Plot from './plot'
import Func from './func'
import Axis from './axis'

const App = props => (
	<div className="App">
		<div className="App-header card">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Plotter</h1>
		</div>
		<section className="App-body">
			<div className="card box input-box">
				<Func />
				<Axis />
			</div>
			<div className="card box plot-box">
				<Plot />
			</div>
		</section>
	</div>
)

export default App
