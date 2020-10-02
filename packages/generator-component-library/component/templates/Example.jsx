import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import _styles from './<%= component_name %>.scss';

const styles = classnames.bind(_styles);

const <%= component_name %> = props => {

	const {
		text,
	} = props;

	return (
		<h1 className={styles('text')}>
			{text}
		</h1>
	);
};

<%= component_name %>.propTypes = {
	text: PropTypes.string,
};

export default <%= component_name %>;
