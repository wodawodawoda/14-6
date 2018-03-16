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
		this.state = {value: 0} //ES6 getInitialState
		// this.inc = this.inc.bind(this)
	}
	// static defaultProps() {} //ES7 defaultProps
	// getInitialState() {} //ES5
	// componentWillMount() // Get initial config from external API in root component
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
	// componentDidMount() // Everything what could be done to mounted component and loading data to component
	// componentWillReciveProps() // Read new props and decide what to do them (eg. update old props on several conditions)
	// shouldComponentUpdate() // Allow or block component re-render after reciving new props. Used for improving performance
	// componentWillUpdate // Same as componentWillMount
	// componentDidUpdate // Same as componentDidMount but due to prop changes
	// componentWillUnmount() // Remove eventListeners or network requests. Cleaning up componentDidMount after unmounting whole component
}

// Counter.defaultProps() = {}; // React 15.5^ defaultProps

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