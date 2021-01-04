import React from 'react'
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

export default class Todos extends React.Component {
    static propTypes = {
        todos: propTypes.array.isRequired
    }

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} 
                toggleComplete={this.props.toggleComplete}
                deleteTodoItem={this.props.deleteTodoItem}/>
        ));
    }
}
