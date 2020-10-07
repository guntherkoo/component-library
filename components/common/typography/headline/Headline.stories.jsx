import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Headline from './Headline';


storiesOf('common/typography/headline', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Headline
				text={text('text', 'Hello world from Headline!')}
			/>
		);
	});
