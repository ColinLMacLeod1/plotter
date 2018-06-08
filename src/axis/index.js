import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAxes, setTempYAxis, setTempXAxis, axisError } from './actions'

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
	}

	handleSubmit = e => {
		console.log('Submit')
		e.preventDefault()
		if (this.props.tempx.indexOf(',') === -1) {
			this.props.axisError(['The supplied x-axis is not valid (missing comma)'])
		} else if (this.props.tempy.indexOf(',') === -1) {
			this.props.axisError(['The supplied y-axis is not valid (missing comma)'])
		} else {
			console.log(
				JSON.parse(`[${this.props.tempx}]`),
				JSON.parse(`[${this.props.tempy}]`),
			)
			this.props.setAxes(
				JSON.parse(`[${this.props.tempx}]`),
				JSON.parse(`[${this.props.tempy}]`),
			)
		}
	}

	render() {
		const { tempx, tempy, setTempXAxis, setTempYAxis } = this.props

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4> Define your axes and press 'Enter'</h4>
					<p className="subtext"> Ex: -1,1 </p>
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
			</div>
		)
	}
}

const mapStateToProps = state => ({
	xaxis: state.axis.xaxis,
	yaxis: state.axis.yaxis,
	tempx: state.axis.tempx,
	tempy: state.axis.tempy,
})

const connected = connect(
	mapStateToProps,
	{ setAxes, setTempYAxis, setTempXAxis, axisError },
)(Axis)

export default connected
