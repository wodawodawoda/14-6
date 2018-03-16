import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


class Child extends React.Component {
	render() {
		return <h2>unmount me at 2 plz</h2>
	}
}


class Counter extends React.Component {
	constructor() {
		super(),
		this.state = {value: 0}
		// this.inc = this.inc.bind(this)
	}
	inc() {
		this.setState({
			value: this.state.value + 1
		})
	}
	dec() {
		this.setState({
			value: this.state.value - 1
		})
	}
	render() {
		return (
			<div>
				<p>{this.state.value}</p>
				<button id="btn" onClick={this.inc.bind(this)}>Increment</button>
				<button id="btn" onClick={this.dec.bind(this)}>Decrement</button>
				{this.state.value === 2 ? null : <Child/>}
			</div>
		)
	}
}

class Parent extends React.Component {
	render() {
		return (
			<div className="parent">
				<Counter/>
				<Counter/>
				<Counter/>
			</div>
		)
	}
}

ReactDOM.render(<Parent/>, document.getElementById('app'))