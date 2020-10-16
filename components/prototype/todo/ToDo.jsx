import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames/bind';
// import ToDoContextProvider from './context/ToDoContext';
import ToDoList from './components/todolist/';
import ToDoInput from './components/ToDoInput';

// import _styles from './ToDo.scss';

// const styles = classnames.bind(_styles);

const ToDo = props => {
	const { style } = props;

	return (
		<div style={style}>
			<ToDoList />
			<ToDoInput />
		</div>
	);
};

ToDo.propTypes = {
	style: PropTypes.object,
};

export default ToDo;
