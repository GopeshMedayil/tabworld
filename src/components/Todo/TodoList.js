import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/actions';

function TodoList() {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos);
    console.log('todos', todos);

    const deleteTodoItem = (id) => {
        console.log('deleteTodo', id);
        dispatch(deleteTodo(id));

    }

    const toggleTodoItem = (id) => {
        console.log('toggleTodo', id);
        dispatch(toggleTodo(id));

    }

    return (
        <React.Fragment>
            {todos.map(todo => {
                return (
                    <div key={todo.id} className="todo-item">
                        <div className="todo-text" onClick={() => toggleTodoItem(todo.id)}>{todo.title}</div>
                        <div className="todo-delete"><button onClick={() => deleteTodoItem(todo.id)}>X</button></div>
                    </div>
                );
            })}
        </React.Fragment>
    )

}

export default TodoList;