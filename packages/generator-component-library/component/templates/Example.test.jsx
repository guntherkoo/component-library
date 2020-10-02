import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import <%= component_name %> from './<%= component_name %>';


describe('<%= component_name %> Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<<%= component_name %> text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<<%= component_name %> text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
