import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/actions';

function TodoList(props) {

    console.log("props", props)
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos);
    console.log('todos', todos);

    const deleteTodoItem = (id) => {
        console.log('deleteTodo', id);
        dispatch(deleteTodo(id));
        props.todo();

    }

    const toggleTodoItem = (event, id) => {
        console.log('toggleTodo', event.target.checked, id);
        dispatch(toggleTodo(id));
        props.todo();

    }

    const onChangeCompleted = (data) => {
        console.log('onChangeCompleted', data);

    }

    return (
        <React.Fragment>
            {todos.map(todo => {
                return (
                    <div key={todo.id} className="todo-item">
                        <div className="todo-text d-inline-flex">
                            <div><input type="checkbox" className="form-check-input" defaultChecked={todo.completed}
                                disabled={todo.completed} name="completed" onChange={(e) => toggleTodoItem(e, todo.id)} /></div>
                            <div className={`ps-1  ${todo.completed ? "text-decoration-line-through" : ''}`}>{todo.title}</div>
                        </div>
                        <div className="todo-delete text-end"><button onClick={() => deleteTodoItem(todo.id)}>X</button></div>
                    </div>
                );
            })}
        </React.Fragment>
    )

}

export default TodoList;