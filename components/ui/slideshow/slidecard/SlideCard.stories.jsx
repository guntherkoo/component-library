import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import SlideCard from './SlideCard';

const example_slide = {
	link: 'http://www.google.com/',
	headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing.',
	category: 'Entertainment',
	category_link: 'http://www.google.com/',
	image: {
		alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing.',
		url: 'https://picsum.photos/640/361',
	}
};

storiesOf('ui/slideshow/slidecard', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<SlideCard
				content={object('content', example_slide)}
			/>
		);
	});
