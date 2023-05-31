/** 
* @author: Jenil Narola
**/

import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/gif.helpers';
import { isNull } from 'lodash';

const GifGrid = ({ searchKeyword, skip, setSkip, setIsPagination }) => {

	const [data, setData] = useState({
		gifImages: [],
		loading: true,
		pagination: {}
	});

	useEffect(() => {
		getGifs(searchKeyword, skip).then((gifs) => {
			setData({
				gifImages: gifs.images || [],
				pagination: gifs.pagination || {},
				loading: false,
			});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchKeyword, skip]);

	useEffect(() => {
		if (data.loading) return;
		if (!isNull(data.pagination) && !isNull(data.pagination.offset) && ((data.pagination.offset + data.pagination.count) < data.pagination.total_count)) {
			setIsPagination(true)
		} else {
			// setSkip(0);
			setIsPagination(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data.pagination]);

	return (
		<>
			<hr />
			<h3 className='animate__animated animate__bounceIn animate__slow'>{searchKeyword}</h3>
			{data && data.loading && <p className='animate__animated animate__flash animate__repeat-2'>Loading ...</p>}
			<div className='card-grid'>
				{data && data.gifImages.length > 0 && data.gifImages.map((imagen) => {
					// return <GifGridItem key={imagen.id} img={imagen} />;
					return <GifGridItem key={imagen.id} {...imagen} />;
				})}
			</div>
		</>
	);
};


export default GifGrid;
