import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

import 'fullpage.js';

library.add(faUserAstronaut, faAppStoreIos);

dom.watch();

$(document).ready(function() {
	$('main').fullpage({
		navigation: false,
		scrollingSpeed: 333,
	});
});
