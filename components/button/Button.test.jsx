import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import Button from './Button';


describe('Button Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<Button text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<Button text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
