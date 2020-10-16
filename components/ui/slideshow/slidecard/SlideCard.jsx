import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import _styles from './SlideCard.scss';

const styles = classnames.bind(_styles);

const SlideCard = props => {

	const {
		category,
		category_link,
		headline,
		link,
		image,
	} = props.content;

	return (
		<div className={styles('container')}>
			<div className={styles('image')}>
				<img src={image.url} alt={image.alt} />
			</div>
			<div className={styles('content')}>
				<div className={styles('grid')}>
					<a href={category_link} className={styles('category')}>
						{category}
					</a>
					<a href={link} className={styles('headline')}>
						{headline}
					</a>
				</div>
			</div>
		</div>
	);
};

SlideCard.propTypes = {
	content: PropTypes.shape({
		category: PropTypes.string.isRequired,
		category_link: PropTypes.string.isRequired,
		headline: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		image: PropTypes.object.isRequired,
	}),
};

export default SlideCard;
