'use strict';

import {Ajax} from '../util/ajax.js';

const model = {};

model.getAlbums = function() {
	let url = '/search-ajaxsearch-searchall?kw=爱我&pi=1&pz=50';
	return Ajax({url});
}

export default model;