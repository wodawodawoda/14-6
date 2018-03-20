import React from 'react';
import ReactDOM from 'react-dom';

export class Stopwatch extends React.Components {
	static propTypes = {
		jbz: 'abc'
	}
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="stoper__stopwatch"></div>
		)
	}
}