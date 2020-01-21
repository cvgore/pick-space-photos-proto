import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faChevronDown, faDesktop, faNetworkWired, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faApple, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

import 'fullpage.js';

library.add(faAppStoreIos, faChevronDown, faDesktop, faSatellite, faNetworkWired, faAndroid, faApple, faBars);

dom.watch();

$(document).ready(function () {
	$('main').fullpage({
		navigation: false,
		scrollingSpeed: 500,
		onLeave: (idx, nextIdx, dir) => {
			if (nextIdx === 4 && dir === 'down') {
				$('.next-slide-down').fadeOut();
			} else if (idx === 4 && dir === 'up') {
				$('.next-slide-down').fadeIn();
			}
		},
	});

});
