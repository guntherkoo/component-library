import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import ToDo from './ToDo';


describe('ToDo Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<ToDo text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<ToDo text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
