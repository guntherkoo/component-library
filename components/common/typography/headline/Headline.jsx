import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import _styles from './Headline.scss';

const styles = classnames.bind(_styles);

const Headline = props => {

	const {
		text,
	} = props;

	return (
		<div className={styles('text')}>
			{text}
		</div>
	);
};

Headline.propTypes = {
	text: PropTypes.string,
};

export default Headline;
