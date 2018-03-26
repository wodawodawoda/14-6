import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {searchingText: ''};
	}

	handleChange(event) {
		const searchingText = event.target.value;
		this.setState({searchingText: searchingText});
		if (searchingText.length > 2) {this.props.onSearch(searchingText);}
	}

	handleKeyUp(event) {
		if (event.keyCode === 13) {this.props.onSearch(this.state.searchingText);}
	}

	render() {
		return (
			<input 
				type="text"
				onChange={this.handleChange.bind(this)}
				onKeyUp={this.handleKeyUp.bind(this)}
				className="app__input"
				placeholder="Tutaj wpisz wyszukiwaną frazę"
				value={this.state.searchTerm}
			/>
		)
	}
}
Search.propTypes = {
	onSearch: PropTypes.func
}