import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions/types';
import './App.css';
import { store } from './index';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

let nextTodoId = 0;

class App extends Component {
	getVisibleTodos(todos, filter) {
		switch (filter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter(t => t.completed);
			case 'SHOW_ACTIVE':
				return todos.filter(t => !t.completed);
			default:
				return todos;
		}
	}
	render() {
		const { todos, visibilityFilter } = this.props.state;
		return (
			<div className="App">
				<AddTodo
					onAddClick={text =>
						store.dispatch({
							type: ADD_TODO,
							id: nextTodoId++,
							text
						})
					}
				/>
				<TodoList
					todos={this.getVisibleTodos(todos, visibilityFilter)}
					onTodoClick={id =>
						store.dispatch({
							type: TOGGLE_TODO,
							id
						})
					}
				/>
				<Footer
					visibilityFilter={visibilityFilter}
					onFilterClick={filter =>
						store.dispatch({
							type: SET_VISIBILITY_FILTER,
							filter
						})
					}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ ...state }) => {
	return {
		state
	};
};

export default connect(mapStateToProps, null)(App);
