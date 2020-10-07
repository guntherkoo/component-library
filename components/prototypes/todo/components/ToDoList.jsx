import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

const ToDoList = () => {
	const context = useContext(ToDoContext);
	
	return (
		<ul>
			{context.list.map((item, i) => (
				<li key={i}>
					{item.to_do}
				</li>
			))}
		</ul>
	);
};

export default ToDoList;
