import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Text from 'components/common/typography/text';

import _styles from './Heading.scss';

const styles = classnames.bind(_styles);

const Color = Text.Color;

const Weight = {
	H1: 'heading-1',
	H1_LIGHT: 'heading-1-light',
	H2: 'heading-2',
	H2_LIGHT: 'heading-2-light',
	H3: 'heading-3',
	H3_LIGHT: 'heading-3-light',
	H4: 'heading-4',
	H4_LIGHT: 'heading-4-light',
	H5: 'heading-5',
	H5_LIGHT: 'heading-5-light',
};

const weight_values = Object.values(Weight);

const getTextPropsByWeight = weight => {
	switch (weight) {
		case Weight.H1:
			return {
				size: Text.Size.HEADING_1,
				font: Text.Font.BOLD,
			};

		case Weight.H1_LIGHT:
			return {
				size: Text.Size.HEADING_1,
				font: Text.Font.LIGHT,
			};

		case Weight.H2:
			return {
				size: Text.Size.HEADING_2,
				font: Text.Font.BOLD,
			};

		case Weight.H2_LIGHT:
			return {
				size: Text.Size.HEADING_2,
				font: Text.Font.LIGHT,
			};

		case Weight.H3:
			return {
				size: Text.Size.HEADING_3,
				font: Text.Font.BOLD,
			};

		case Weight.H3_LIGHT:
			return {
				size: Text.Size.HEADING_3,
				font: Text.Font.LIGHT,
			};

		case Weight.H4:
			return {
				size: Text.Size.HEADING_4,
				font: Text.Font.BOLD,
			};

		case Weight.H4_LIGHT:
			return {
				size: Text.Size.HEADING_4,
				font: Text.Font.LIGHT,
			};

		case Weight.H5:
			return {
				size: Text.Size.HEADING_5,
				font: Text.Font.BOLD,
			};

		case Weight.H5_LIGHT:
			return {
				size: Text.Size.HEADING_5,
				font: Text.Font.LIGHT,
			};

		default:
			return null;
	}
};

const Heading = props => {
	const {
		className,
		weight,
		...renderable_props
	} = props;

	const text_props = getTextPropsByWeight(weight);

	const composed_className = classnames(
		styles('heading', weight), className
	);

	return (
		<Text
			{...renderable_props}
			{...text_props}
			className={composed_className}
		/>
	);
};

Heading.Color = Color;
Heading.Weight = Weight;

Heading.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.oneOf(weight_values),
	tag: PropTypes.string,
};

Heading.defaultProps = {
	color: Color.ALMOST_BLACK,
	weight: Weight.H1,
	tag: 'h1',
};

export default Heading;
