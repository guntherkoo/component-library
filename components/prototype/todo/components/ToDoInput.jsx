import React, { useState, useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

const Input = () => {
	const context = useContext(ToDoContext);
	const [todo, setToDo] = useState('');

	const handleOnSubmit = e => {
		e.preventDefault();

		context.addToDo(todo);
		setToDo('');
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<input
				type='text'
				value={todo}
				required
				onChange={e => {
					setToDo(e.target.value);
				}}
			/>
			<input type='submit' value='Submit'/>
		</form>
	);
};

export default Input;
