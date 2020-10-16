import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import Slideshow from './Slideshow';


describe('Slideshow Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<Slideshow text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<Slideshow text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
