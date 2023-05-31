/** 
* @author: Jenil Narola
**/

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GiphySearch = ({ setSearchKeyword }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length > 2) {
			setSearchKeyword((prevCats) => inputValue);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Search For GIPHY</h3>
			<div className='row'>
				<input type='text' value={inputValue} onChange={handleInputChange} placeholder='🔍︎ Type here to search'></input>
			</div>
			<div className='row_center'>
				<button className='gif_button_submit' type='submit'>Search</button>
				<button className='gif_button_submit' onClick={() => window.location.href = "/saved"}>View Saved Items</button>
			</div>
		</form>
	);
};

GiphySearch.propTypes = {
	setSearchKeyword: PropTypes.func.isRequired,
};

export default GiphySearch;
