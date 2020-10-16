import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import classnames from 'classnames/bind';
import SlideCard from './slidecard';

import _styles from './Slideshow.scss';
import './static/slick.css';
// import './static/slick.theme.css';

const styles = classnames.bind(_styles);

const Slideshow = props => {
	const {
		style,
		content,
		settings,
	} = props;

	return (
		<Slider
			style={style}
			className={styles('container')}
			{...settings}
		>
			{content.map((item, i) => (
				<SlideCard key={i} content={item} />
			))}
		</Slider>
	);
};

Slideshow.propTypes = {
	style: PropTypes.object,
	content: PropTypes.array.isRequired,
	settings: PropTypes.object.isRequired,
};

export default Slideshow;
