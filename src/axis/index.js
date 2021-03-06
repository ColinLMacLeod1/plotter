import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAxes, setTempYAxis, setTempXAxis, axisError } from './actions'
import { setData } from '../func/actions'
import refreshData from '../lib/refreshData'

class Axis extends Component {
	static propTypes = {
		xaxis: PropTypes.array,
		yaxis: PropTypes.array,
		tempx: PropTypes.string,
		tempy: PropTypes.string,
		errors: PropTypes.array,
		setTempYAxis: PropTypes.func,
		setTempXAxis: PropTypes.func,
		setAxes: PropTypes.func,
		setData: PropTypes.func,
		func: PropTypes.string,
	}

	handleSubmit = e => {
		e.preventDefault()
		let newX = this.props.tempx
		let newY = this.props.tempy
		if (newX.indexOf(',') === -1) {
			this.props.axisError(['The supplied x-axis is not valid (missing comma)'])
		} else if (newY.indexOf(',') === -1) {
			this.props.axisError(['The supplied y-axis is not valid (missing comma)'])
		} else {
			newX = newX.replace(/\[/g, '').replace(/\]/g, '')
			newY = newY.replace(/\[/g, '').replace(/\]/g, '')
			newX = JSON.parse(`[${newX}]`)
			newY = JSON.parse(`[${newY}]`)
			if (newX[0] > newX[1] || newY[0] > newY[1]) {
				this.props.axisError(['One of the axes is inverted'])
			} else {
				const data = refreshData(this.props.func, newX, newY)
				this.props.setData(data)
				this.props.setAxes(newX, newY)
			}
		}
	}

	render() {
		const { tempx, tempy, setTempXAxis, setTempYAxis, errors } = this.props
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h5 className="input-title"> Define your axes and press 'Enter'</h5>
					<p className="subtext input-title"> Ex: -1,1 </p>
					<h4 className="func-input">x:</h4>
					<input
						type="text"
						value={tempx}
						onChange={e => setTempXAxis(e.target.value)}
						className="axis-input"
					/>
					<h4 className="func-input">y:</h4>
					<input
						type="text"
						value={tempy}
						onChange={e => setTempYAxis(e.target.value)}
						className="axis-input"
					/>
					<button type="submit" className="hidden-submit" />
				</form>
				{errors.map((error, index) => (
					<p className="axis-error-text" key={index}>
						{error}
					</p>
				))}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	xaxis: state.axis.xaxis,
	yaxis: state.axis.yaxis,
	tempx: state.axis.tempx,
	tempy: state.axis.tempy,
	func: state.func.func,
	errors: state.axis.errors,
})

const connected = connect(
	mapStateToProps,
	{ setAxes, setTempYAxis, setTempXAxis, axisError, setData },
)(Axis)

export default connected
