import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import compile from 'interval-arithmetic-eval'
import { setFunctionInput, setFunction } from './actions'

class ReactComponent extends Component {
	static propTypes = {
		funcvalue: PropTypes.string,
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.setFunction(this.props.funcvalue, [0, 1, 2])
	}

	render() {
		const { funcvalue, setFunctionInput } = this.props
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4> Type your expression and press 'Enter'</h4>
					<h4 className="func-input">y = </h4>
					<input
						type="text"
						value={funcvalue}
						onChange={e => setFunctionInput(e.target.value)}
					/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	funcvalue: state.func.funcvalue,
})

const connected = connect(
	mapStateToProps,
	{ setFunctionInput, setFunction },
)(ReactComponent)

export default connected
