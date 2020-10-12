import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import ToDoList from './ToDoList';


describe('ToDoList Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<ToDoList text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<ToDoList text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
