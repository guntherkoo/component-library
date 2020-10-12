import React, { useContext } from 'react';
import classnames from 'classnames/bind';
import { ToDoContext } from '../../context/ToDoContext';
import Text from 'components/common/typography/text';

import _styles from './ToDoList.scss';

const styles = classnames.bind(_styles);

const ToDoList = () => {
	const context = useContext(ToDoContext);
	
	return (
		<>
			{context.list.map((item, i) => (
				<div
					className={styles('item')}
					key={i}
				>
					<Text
						tag='p'
						font={Text.Font.REGULAR}
						color={Text.Color.WHITE}
					>
						{item.to_do}
					</Text>
				</div>
			))}
		</>
	);
};

export default ToDoList;
