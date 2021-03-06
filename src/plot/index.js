import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import compile from 'interval-arithmetic-eval'
import { LineChart } from 'react-easy-chart'
import Dimensions from 'react-dimensions'

class ReactComponent extends Component {
	static propTypes = {
		func: PropTypes.string,
		data: PropTypes.array,
		xaxis: PropTypes.array,
		yaxis: PropTypes.array,
	}

	render() {
		const { func, xaxis, yaxis, data } = this.props
		return (
			<div>
				<h5 className="plot-title">{`y = ${func}`}</h5>
				<LineChart
					axes
					grid
					interpolate={'cardinal'}
					width={this.props.containerWidth}
					height={this.props.containerWidth}
					data={[[], data]}
					xDomainRange={xaxis}
					yDomainRange={yaxis}
				/>
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

export default Dimensions()(connected)
