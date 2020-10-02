import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import _styles from './Button.scss';

const styles = classnames.bind(_styles);

const Button = props => {

	const {
		text,
	} = props;

	return (
		<h1 className={styles('text')}>
			{text}
		</h1>
	);
};

Button.propTypes = {
	text: PropTypes.string,
};

export default Button;
