import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/actions';

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos);
    console.log('todos', todos);

    const deleteTodoItem = (id) => {
        console.log('deleteTodo', id);
        dispatch(deleteTodo(id));

    }

    return (
        <div>
            Todolist
            {todos.map(todo => {
                return <div key={todo.id}><div >{todo.title} <button onClick={() => deleteTodoItem(todo.id)}>Delete</button></div></div>
            })}
        </div>
    )

}

export default TodoList;