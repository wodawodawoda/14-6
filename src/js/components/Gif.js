import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let styles = {
	minHeight: '310px',
	margin: '0.5em'
}
const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

export class Gif extends React.Component {
	getUrl() {
		
		return this.props.sourceUrl || GIPHY_LOADING_URL
	}
	render() {
		const url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
		return (
			<div className="app__gif" styles="{styles}">
				<a href={this.getUrl()} title="view this on giphy" target="new">
					<img src={url} alt="" id="gif" className="app__img" style={{width: '100%', maxWidth: '350px'}}/>
				</a>
			</div>
		)
	}
}