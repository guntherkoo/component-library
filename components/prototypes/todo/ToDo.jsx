import React from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames/bind';
import ToDoContextProvider from './context/ToDoContext';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

// import _styles from './ToDo.scss';

// const styles = classnames.bind(_styles);

const ToDo = () => {
	return (
		<ToDoContextProvider>
			<ToDoList />
			<ToDoInput />
		</ToDoContextProvider>
	);
};

// ToDo.propTypes = {
// 	text: PropTypes.string,
// };

export default ToDo;
