import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faDesktop, faNetworkWired, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { faAppStoreIos, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

import 'fullpage.js';

library.add(faAppStoreIos, faChevronDown, faDesktop, faSatellite, faNetworkWired, faAndroid, faApple);

dom.watch();

$(document).ready(function() {
	const animateLogo = (reverse = false) => {
		const $logo = $('.logo');
		const $brand = $('.navbar-brand > img');
		
		if (!reverse) {
			let pxMoveX = Math.abs($logo.offset().left - $brand.offset().left) + 24;
			let pxMoveY = Math.abs($logo.offset().top - $brand.offset().top) + 5;
			// $logo.css({transform: `translate3d(-${pxMoveX}px, -${pxMoveY}px, 0)`, width: '60px'});
			$brand.css({visibility: 'visible'});
		} else {
			// $logo.css({transform: '', width: ''});
			$brand.css({visibility: 'hidden'});
		}
	};

	$('main').fullpage({
		navigation: false,
		scrollingSpeed: 500,
		onLeave: (idx, nextIdx, dir) => {
			if (idx === 1 && dir === 'down') {
				animateLogo(false);
			} else if (idx === 2 && dir === 'up') {
				animateLogo(true);
			}

			if (nextIdx === 4 && dir === 'down') {
				$('.next-slide-down').fadeOut();
			} else if (idx === 4 && dir === 'up') {
				$('.next-slide-down').fadeIn();
			}
		}
	});

});
