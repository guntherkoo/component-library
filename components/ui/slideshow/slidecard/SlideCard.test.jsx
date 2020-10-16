import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import SlideCard from './SlideCard';


describe('SlideCard Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<SlideCard text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<SlideCard text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
