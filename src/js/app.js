import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

import 'pagepiling.js';

library.add(faUserAstronaut);

dom.watch();

$(document).ready(function() {
	$('main').pagepiling({
		navigation: false,
		scrollingSpeed: 250,
	});
});
