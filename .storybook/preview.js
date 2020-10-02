// global decorators
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';

import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'; 
addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});

addParameters({
	backgrounds: [
		{
			name: 'off white',
			value: '#f2f2f2',
		},
		{
			name: 'light grey',
			value: '#a6a6a6',
		},
		{
			name: 'medium grey',
			value: '#595959',
		},
		{
			name: 'dark grey',
			value: '#262626',
		},
		{
			name: 'almost black',
			value: '#0d0d0d',
		},
		{
			name: 'black',
			value: '#000000',
		},
	],
});

require('styles/_fonts.scss');
