import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import Headline from './Headline';


describe('Headline Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<Headline text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<Headline text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
