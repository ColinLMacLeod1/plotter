import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFunctionInput, setFunction, funcErrors, setData } from './actions'
import addHistory from '../history/actions'
import refreshData from '../lib/refreshData'

class ReactComponent extends Component {
	static propTypes = {
		funcvalue: PropTypes.string,
		errors: PropTypes.array,
		setFunction: PropTypes.func,
		setFunctionInput: PropTypes.func,
		addHistory: PropTypes.func,
		funcErrors: PropTypes.func,
		setData: PropTypes.func,
		xaxis: PropTypes.array,
		yaxis: PropTypes.array,
	}

	handleSubmit = e => {
		e.preventDefault()
		let newfunc = this.props.funcvalue
		if (
			newfunc.replace('x', '').match(/[a-z]/i) &&
			newfunc.indexOf('sin') !== -1 &&
			newfunc.indexOf('cos') !== -1 &&
			newfunc.indexOf('tan') !== -1 &&
			newfunc.indexOf('log') !== -1
		) {
			this.props.funcErrors(['This function contains variables other than x'])
		} else if (
			isNaN(newfunc[newfunc.length - 1]) &&
			newfunc[newfunc.length - 1] !== 'x' &&
			newfunc[newfunc.length - 1] !== ')'
		) {
			this.props.funcErrors(['This function is not valid'])
		} else {
			const data = refreshData(newfunc, this.props.xaxis, this.props.yaxis)
			this.props.setFunction(newfunc)
			this.props.setData(data)
			this.props.addHistory(newfunc)
		}
	}

	render() {
		const { funcvalue, setFunctionInput, errors } = this.props
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h5 className="input-title">
						{' '}
						Type your expression and press 'Enter'
					</h5>
					<h4 className="func-input">y = </h4>
					<input
						type="text"
						value={funcvalue}
						onChange={e => setFunctionInput(e.target.value)}
					/>
					{errors.map((error, index) => (
						<p className="func-error-text" key={index}>
							{error}
						</p>
					))}
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	funcvalue: state.func.funcvalue,
	errors: state.func.errors,
	xaxis: state.axis.xaxis,
	yaxis: state.axis.yaxis,
})

const connected = connect(
	mapStateToProps,
	{ setFunctionInput, setFunction, addHistory, funcErrors, setData },
)(ReactComponent)

export default connected
