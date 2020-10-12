import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import _styles from './Text.scss';

const styles = classnames.bind(_styles);

const Color = {
	INHERIT: 'inherit-color',
	WHITE: 'white',
	OFFWHITE: 'offwhite',
	LIGHTER_GREY: 'lighter-grey',
	LIGHT_GREY: 'light-grey',
	GREY: 'grey',
	DARK_GREY: 'dark-grey',
	DARKER_GREY: 'darker-grey',
	ALMOST_BLACK: 'almost-black',
	BLACK: 'black',
};

const Font = {
	INHERIT: 'inherit-font',
	LIGHT: 'light',
	ALL_CAPS_LIGHT: 'all-caps-light',
	REGULAR: 'regular',
	ALL_CAPS_REGULAR: 'all-caps-regular',
	BOLD: 'bold',
	ALL_CAPS_BOLD: 'all-caps-bold',
};

const Size = {
	INHERIT: 'inherit-size',
	DEFAULT: 'default',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	HEADING_1: 'heading-1',
	HEADING_2: 'heading-2',
	HEADING_3: 'heading-3',
	HEADING_4: 'heading-4',
	HEADING_5: 'heading-5',
};

const color_values = Object.values(Color);
const font_values = Object.values(Font);
const size_values = Object.values(Size);

const Text = props => {
	const {
		className,
		children,
		style,
		color,
		font,
		size,
		tag: Tag,
		...renderable_props
	} = props;

	const use_custom_color = color && !color_values.includes(color);
	const color_classname = use_custom_color ? undefined : color;

	const composed_classname = classnames(
		styles('text', color_classname, font, size),
		className,
	);

	const composed_style = Object.assign({}, use_custom_color && {
		color,
	}, style);

	return (
		<Tag
			{...renderable_props}
			className={composed_classname}
			style={composed_style}
		>
			{children}
		</Tag>
	);
};

Text.Color = Color;
Text.Font = Font;
Text.Size = Size;

Text.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	style: PropTypes.object,
	color: PropTypes.string,
	font: PropTypes.oneOf(font_values),
	size: PropTypes.oneOf(size_values),
	tag: PropTypes.string,
};

Text.defaultProps = {
	color: Color.ALMOST_BLACK,
	font: Font.REGULAR,
	size: Size.DEFAULT,
	tag: 'span'
};

export default Text;
