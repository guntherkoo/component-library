import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';

import ToDoContextProvider from './context/ToDoContext';

import ToDo from './ToDo';

const style = {
	width: '414px',
	margin: '0 auto',
	backgroundColor: '#232323',
};

storiesOf('prototype/todo', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<ToDoContextProvider>
				<ToDo style={style} />
			</ToDoContextProvider>
		);
	});
