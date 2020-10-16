import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import Slideshow from './Slideshow';

const slick_settings = {
	easing: 'easeInOutExpo',
	infinite: true,
	speed: 750,
	slidesToShow: 2,
	slidesToScroll: 1,
	pauseOnHover: true,
	autoplay: true,
};

const style = {
	width: '1024px',
};

const slideshow = [
	{
		link: 'http://www.google.com/',
		headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing.',
		category: 'Entertainment',
		category_link: 'http://www.google.com/',
		image: {
			alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing.',
			url: 'https://picsum.photos/640/361',
		}
	}, {
		link: 'http://www.google.com/',
		headline: 'Lorem ipsum dolor sit amet',
		category: 'Nature',
		category_link: 'http://www.google.com/',
		image: {
			alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			url: 'https://picsum.photos/641/360',
		}
	}, {
		link: 'http://www.google.com/',
		headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing elit.',
		category: 'Nature',
		category_link: 'http://www.google.com/',
		image: {
			alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing elit.',
			url: 'https://picsum.photos/642/360',
		}
	}, {
		link: 'http://www.google.com/',
		headline: 'Lorem ipsum dolor sit amet',
		category: 'Architecture',
		category_link: 'http://www.google.com/',
		image: {
			alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			url: 'https://picsum.photos/640/363',
		}
	}
];

storiesOf('ui/slideshow', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Slideshow
				style={style}
				settings={object('settings', slick_settings)}
				content={object('content', slideshow)}
			/>
		);
	});
