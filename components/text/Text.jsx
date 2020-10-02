import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import _styles from './Text.scss';

const styles = classnames.bind(_styles);

const Text = props => {

	const {
		text,
	} = props;

	return (
		<h1 className={styles('text')}>
			{text}
		</h1>
	);
};

Text.propTypes = {
	text: PropTypes.string,
};

export default Text;
