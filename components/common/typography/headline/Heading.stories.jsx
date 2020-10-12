import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Heading from './Heading';

const example_text = 'Stay hungry. Stay foolish.';

const weights = Object.values(Heading.Weight);

const style = {
	maxWidth: '720px',
	margin: '10px 0',
};

storiesOf('common/typography/heading', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Heading
				style={style}
				tag={text('tag', 'h1')}
				weight={select('weight', Heading.Weight, Heading.Weight.Heading_1)}
				color={select('color', Heading.Color, Heading.Color.ALMOST_BLACK)}
			>
				{text('text', example_text)}
			</Heading>
		);
	})
	.add('weights', () => {
		return (
			<>
				{weights.map(weight => (
					<Heading
						key={weight}
						style={style}
						weight={weight}
						color={Heading.Color.DARK_GREY}
					>
						{example_text}
					</Heading>
				))}
			</>
		);
	});
