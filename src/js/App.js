import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Gif} from './components/Gif';
import {Search} from './components/Search';

let styles = {
	margin: '0 auto',
	textAlign: 'center',
	width: '90%'
}
class App extends React.Component {
	constructor(props) {
		super(props),
		this.state = {
			loading: false,
			searchingText: '',
			gif: {}
		}
	}
	getGif(searchingText, callback) {  // 1.
		const GIPHY_PUB_KEY = 'JaMQgi5Qf2hTDeUgAVizAI6OMNcTL6y0';
		const GIPHY_API_URL = 'https://api.giphy.com';
	    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
	    var xhr = new XMLHttpRequest();  // 3.
	    xhr.open('GET', url);
	    xhr.onload = function() {
	        if (xhr.status === 200) {
	           var data = JSON.parse(xhr.responseText).data; // 4.
	            var gif = {  // 5.
	                url: data.fixed_width_downsampled_url,
	                sourceUrl: data.url
	            };
	            callback(gif);  // 6.
	        }
	    };
	    xhr.send();
	}

	handleSearch(searchingText) {
		// const self = this  // Removed thanks to arrow function
		this.setState({loading: true})
		this.getGif(searchingText, gif => {
			this.setState({
				loading: false,
				gif: gif,
				searchingText: searchingText
			});
		});
	}

	render() {
		return (
			<div className="app container" style={this.props.styles}>
				<h1 className="app__header">Wyszukiwarka GIFów!</h1>
				<p className="app__text">Znajdź gifa na <a href={this.state.gif.sourceUrl}>giphy</a>. Naciskaj enter aby pobrać kolejne gify.</p>
				<Search
					onSearch={this.handleSearch.bind(this)}
				/>
				<Gif
					loading={this.state.loading}
					url={this.state.gif.url}
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		)
	}
}
App.defaultProps = {
	styles: styles
}

ReactDOM.render(<App/>, document.getElementById('app'))