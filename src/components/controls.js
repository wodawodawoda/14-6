import React from 'react';
import ReactDOM from 'react-dom';
import Records from './Records';

export function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

export let records = [];

class Stopwatch extends React.Component{
	constructor(props) {
		super(props);
		this.state = {running: false, minutes: 0, seconds: 0, miliseconds: 0};

		this.handleStart = this.handleStart.bind(this);
		this.handleRecord = this.handleRecord.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	step() {
		if(!this.state.running) return;
		this.calculate();
	}
	// handleStart = () => { //Check babel version
	handleStart() { // TOFIX: interval is speeding up every click
		this.setState(prevState => ({
			running: !prevState.running
		}));
		if(!this.state.running) {
			setInterval(() => this.step(), 10);
		}
	}
	handleRecord() {
		records.unshift({
			minutes: this.state.minutes,
			seconds: this.state.seconds,
			miliseconds: this.state.miliseconds
		});
		this.setState(this.state);
	}
	calculate() {
		this.setState({miliseconds: this.state.miliseconds + 1});
		if (this.state.miliseconds >=100) {
			this.setState({seconds: this.state.seconds + 1});
			this.setState({miliseconds: 0});
		}
		if (this.state.seconds >= 60) {
			this.setState({minutes: this.state.minutes + 1});
			this.setState({seconds: 0});
		}
	}
	handleReset() {
		records = [];
		this.setState({
			running: false,
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		});
	}
	render() {
		return (
			<div className="stoper container">
				<button className="btn" id="start" onClick={this.handleStart}>Start / Stop</button>
				<button className="btn" id="record" onClick={this.handleRecord}>record</button>
				<button className="btn" id="reset" onClick={this.handleReset}>Reset</button>
				<p>{pad0(this.state.minutes)}:{pad0(this.state.seconds)}:{pad0(Math.floor(this.state.miliseconds))}</p>
				<Records />
			</div>
		)
	}
}


ReactDOM.render(<Stopwatch/>, document.getElementById('app'))