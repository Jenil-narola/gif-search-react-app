/** 
* @author: Jenil Narola
**/

import React from 'react';
import GifGridOfID from '../components/GifGridOfID';

const GifExpertSavedApp = ({ defaultCategories }) => {

	return (
		<>
			<h2>Giphy Search App by Jenil Narola</h2>
			<div>
				<hr />
				<button className='gif_button_submit' onClick={() => window.location.href = "/"}>Back</button>
				<hr />
				<GifGridOfID />
			</div>
		</>
	);
};


export default GifExpertSavedApp;
