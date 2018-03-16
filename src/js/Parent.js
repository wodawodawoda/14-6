import React from "react";
import ReactDOM from "react-dom";

import {Counter} from './Counter'


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