import React from 'react';
import PropTypes from 'prop-types';

const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

export class Gif extends React.Component {
	getUrl() {
		return this.props.sourceUrl || GIPHY_LOADING_URL;
	}
	render() {
		const url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
		return (
			<div className="app__gif">
				<a href={this.getUrl()} title="view this on giphy" target="new">
					<img src={url} alt="" id="gif" className="app__img"/>
				</a>
			</div>
		)
	}
}
Gif.propTypes = {
	sourceUrl: PropTypes.string,
    url: PropTypes.string,
	loading: PropTypes.bool
}