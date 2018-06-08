import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { LineChart } from 'react-d3-basic'
import { setFunction } from '../func/actions'
//import compile from 'interval-arithmetic-eval'

class ReactComponent extends Component {
	static propTypes = {
		func: PropTypes.string,
		data: PropTypes.array,
	}

	componentWillMount() {
		setFunction(this.props.func, [0, 1])
	}

	render() {
		const { func, xaxis, yaxis } = this.props

		return (
			<div className="card box">
				<h5>Plot</h5>
				<h5>
					{func},{xaxis}, {yaxis}
				</h5>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	func: state.func.func,
	data: state.func.data,
	xaxis: state.axis.xaxis,
	yaxis: state.axis.yaxis,
})

const connected = connect(mapStateToProps)(ReactComponent)

export default connected
