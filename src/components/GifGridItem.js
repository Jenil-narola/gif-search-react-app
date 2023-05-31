/** 
* @author: Jenil Narola
**/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { checkSaved, removeFromSave, saveLater } from '../helpers/gif.helpers';

const GifGridItem = ({ title, url, import_datetime, user_name, id, refreshPage }) => {

	const [isSaved, setSaved] = useState(checkSaved(id));

	const handleSave = () => {
		setSaved(!isSaved);
		// check path 
		let path = window.location.pathname;
		if (path === "/saved") {
			refreshPage()
		}
	};

	return (
		<div className='card animate__animated animate__fadeIn animate__slower'>
			<img src={url} alt={title} />
			<p className='gif_title'><b>Title</b><br></br> {title || "Giphy Has No Title"}</p>
			<p className='gif_title'><b>Uploaded By</b><br></br> {user_name || "Anonyms User "}</p>
			{/* Save for letter button */}
			{isSaved ? <button className='gif_button_saved' onClick={() => {
				removeFromSave(id)
				handleSave()
			}}>
				🚫 Remove From Saved
			</button> :
				<button className='gif_button' onClick={() => {
					saveLater(id)
					handleSave()
				}}>
					💾 Save for later
				</button>
			}
		</div>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifGridItem;
