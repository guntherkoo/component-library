import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

export const ToDoContext = createContext();

class ToDoContextProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: 'active',
			list: [{
				to_do: 'Get mail',
				finished: false,
			}, {
				to_do: 'Print letters',
				finished: false,
			}]
		};
	}

	static propTypes = {
		children: PropTypes.object.isRequired,
	};

	addToDo = val => {
		this.setState({
			list: [...this.state.list, {
				to_do: val,
				finished: false
			}]
		});
	}

	render() {
		return (
			<ToDoContext.Provider
				value={{
					...this.state,
					addToDo: this.addToDo
				}}
			>
				{this.props.children}
			</ToDoContext.Provider>
		);
	}
}

export default ToDoContextProvider;
