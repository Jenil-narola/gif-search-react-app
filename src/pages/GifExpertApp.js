/** 
* @author: Jenil Narola
**/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GiphySearch from './../components/GiphySearch';
import GifGrid from './../components/GifGrid';

const GifExpertApp = ({ defaultCategories }) => {

	const [searchKeyword, setSearchKeyword] = useState(defaultCategories);
	const [skip, setSkip] = useState(0);
	const [isPagination, setIsPagination] = useState(false);

	const triggerToNextPage = (skip) => {
		setSkip(skip + 50);
	}

	const triggerToPreviousPage = (skip) => {
		setSkip(skip - 50);
	}

	return (
		<>
			<h2>Giphy Search App by Jenil Narola</h2>
			<div>
				<hr />
				<GiphySearch setSearchKeyword={setSearchKeyword} />
				<hr />
				<ol>
					<GifGrid searchKeyword={searchKeyword} skip={skip} setIsPagination={setIsPagination} setSkip={setSkip} />
				</ol>

				{/* Next and previous button */}
				{isPagination && <div className='row_center'>
					{skip !== 0 && <button className='gif_button_submit' onClick={() => triggerToPreviousPage(skip)}>← Previous</button>}
					<button className='gif_button_submit' onClick={() => triggerToNextPage(skip)} >Next →</button>
				</div>}
			</div>

		</>
	);
};

GifExpertApp.propTypes = {
	defaultCategories: PropTypes.string,
};

GifExpertApp.defaultProps = {
	defaultCategories: 'Burrito',
};

export default GifExpertApp;
