/** 
* @author: Jenil Narola
**/

import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { getGifsById } from '../helpers/gif.helpers';

const GifGridOfID = () => {

	const [data, setData] = useState({
		gifImages: [],
		loading: true,
		pagination: {}
	});

	useEffect(() => {
		refreshPage();
	}, []);

	const refreshPage = () => {
		getGifsById().then((gifs) => {
			setData({
				gifImages: gifs.images || [],
				pagination: gifs.pagination || {},
				loading: false,
			});
		});
	}

	return (
		<>
			<hr />
			<h3 className='animate__animated animate__bounceIn animate__slow'>All Saved Items</h3>
			{data && data.loading && <p className='animate__animated animate__flash animate__repeat-2'>Loading ...</p>}
			<div className='card-grid'>
				{data && data.gifImages.length > 0 && data.gifImages.map((imagen) => {
					// return <GifGridItem key={imagen.id} img={imagen} />;
					return <GifGridItem key={imagen.id} {...imagen} refreshPage={refreshPage} />;
				})}
			</div>
		</>
	);
};


export default GifGridOfID;
