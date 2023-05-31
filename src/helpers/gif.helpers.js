/**
 * @param {string} searchString
 * @returns {Promise}
 * @description
 * This function will return a promise with the gifs
 */

export const getGifs = async (searchString, skip) => {
	// print env
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(searchString)}&api_key=${process.env.REACT_APP_GIF_API_KEY}&offset=${skip}`;

	const response = await fetch(url);
	const { data, pagination } = await response.json();

	// based on offset value and total_count value we have to decide that pagination is required or not

	let gifs = {}
	gifs.images = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			user_name: img.username,
			url: img.images?.downsized_medium.url,
		};
	});

	// add pagination
	gifs.pagination = pagination;

	return gifs;
};

export const getGifsById = async () => {

	//get from local storage
	let saved = localStorage.getItem('saved');
	// parse to array
	saved = JSON.parse(saved);
	if (saved === null) {
		saved = [];
	}

	let searchIds = saved.join(',');
	const url = `https://api.giphy.com/v1/gifs?ids=${searchIds}&api_key=${process.env.REACT_APP_GIF_API_KEY}`;

	const response = await fetch(url);
	const { data, pagination } = await response.json();

	// based on offset value and total_count value we have to decide that pagination is required or not
	let gifs = {}
	gifs.images = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			user_name: img.username,
			url: img.images?.downsized_medium.url,
		};
	});

	// add pagination
	gifs.pagination = pagination;

	return gifs;
};

export const saveLater = (id) => {

	// get from local storage
	let saved = localStorage.getItem('saved');
	// parse to array
	saved = JSON.parse(saved);
	if (saved === null) {
		saved = [];
	}
	saved.push(id);
	localStorage.setItem('saved', JSON.stringify(saved));

}

export const removeFromSave = (id) => {

	// get from local storage
	let saved = localStorage.getItem('saved');
	saved = JSON.parse(saved);
	if (saved === null) {
		saved = [];
	}
	saved = saved.filter((item) => item !== id);
	localStorage.setItem('saved', JSON.stringify(saved));

}

export const checkSaved = (id) => {

	let saved = localStorage.getItem('saved');
	if (saved === null) {
		saved = [];
	}
	if (saved.includes(id)) {
		return true;
	} else {
		return false;
	}
}


