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
        <div>
            Todolist
            {todos.map(todo => {
                return <div key={todo.id}><div onClick={() => toggleTodoItem(todo.id)}>{todo.title}--{todo.completed ? "true" : "false"}</div> <button onClick={() => deleteTodoItem(todo.id)}>Delete</button></div>
            })}
        </div>
    )

}

export default TodoList;