import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {records, pad0} from './controls'

export default class Records extends React.Component {
	render() {
		const record = records.map(function(data, index) {
			return (
				<li>{pad0(data.minutes)}:{pad0(data.seconds)}:{pad0(data.miliseconds)}</li>
			)
		})
		return record
	}
}