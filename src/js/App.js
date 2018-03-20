import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Gif} from './components/Gif';
import {Search} from './components/Search';

let styles = {
	margin: '0 auto',
	textAlign: 'center',
	width: '90%'
};


function httpGet(url) {
	return new Promise(
		function (resolve, reject) {
			const xhr = new XMLHttpRequest();
			xhr.onload = function() {
				if(this.status === 200) {
					resolve(this.response);
				} else {
					reject(new Error(this.statusText));
				}
			};
			xhr.onerror = function() {
				reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
			};
			xhr.open('GET', url);
			xhr.send();
		}
	);
}

class App extends React.Component {
	constructor(props) {
		super(props),
		this.state = {
			loading: false,
			searchingText: '',
			gif: {}
		};
	}
	getGif(searchingText, callback) {  // 1.
	    const url = 'https://api.giphy.com/v1/gifs/random?api_key=JaMQgi5Qf2hTDeUgAVizAI6OMNcTL6y0&tag=' + searchingText;  // 2.
	    httpGet(url)
	    .then(response => {
			const data = JSON.parse(response).data; // 4.
			const gif = {  // 5.
				url: data.fixed_width_downsampled_url,
				sourceUrl: data.url
			};
			callback(gif);
	    })
	    .catch(error => console.error('Sth wrong:', error));


	}

	handleSearch(searchingText) {
		// const self = this  // Removed thanks to arrow function
		this.setState({loading: true});
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

ReactDOM.render(<App/>, document.getElementById('app'));