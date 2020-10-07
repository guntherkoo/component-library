import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select, color } from '@storybook/addon-knobs';

import Text from './Text';

const example_text = 'Drop the "the", just Facebook. It\'s cleaner.';

storiesOf('common/typography/text', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Text
				tag={text('tag', 'span')}
				font={select('font', Text.Font, Text.Font.REGULAR)}
				color={select('color', Text.Color, Text.Color.ALMOST_BLACK)}
				size={select('size', Text.Size, Text.Size.DEFAULT)}
			>
				{text('text', example_text)}
			</Text>
		);
	})
	.add('custom CSS color', () => {
		return (
			<Text
				color={color('color', '#4A90E2')}
				font={Text.Font.REGULAR}
			>
				{text('text', example_text)}
			</Text>
		);
	});
