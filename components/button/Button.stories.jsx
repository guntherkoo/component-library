import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './Button';


storiesOf('button', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Button
				text={text('text', 'Hello world from Button!')}
			/>
		);
	});
