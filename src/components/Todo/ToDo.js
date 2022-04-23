import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import TodoList from "../Todo/TodoList";
import "./Todo.css"
import { useEffect } from 'react';
import { useState } from 'react';
import Header from "../Header/Header";

function ToDo() {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const [count, setCount] = useState(0);

    useEffect(() => {
        let todos = window.localStorage.getItem('tabData');
        if (todos) {
            todos = JSON.parse(todos);
            console.log("TTOTOTO", todos.todoReducer.todos);
            let filteredTodos = todos.todoReducer.todos.filter(todo => todo.completed === false);
            setCount(filteredTodos.length);
        }
        // console.log("tooo", todos)
        // setCount(todos.length);
    }, []);

    const increment = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    }
    const onSubmit = (onSubmit) => {
        console.log('onSubmit', onSubmit);
        dispatch(addTodo({
            title: onSubmit.name,
            id: Date.now(),
            completed: false
        }));
        setCount(count + 1);
        reset({
            name: "",
            id: ""

        })
    };
    return (
        <div>
            <div className="todo-container">
                <Header title="ToDo" showButton={false} borderColor="blue"></Header>
                <div className="todo-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" autoComplete="off" required placeholder="Add your new todo" {...register("name")} />
                        <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                        <button>+</button>
                    </form>
                </div>
                <div className="todo-count">
                    <span className="todo-number">{count}</span>
                    <span className="text-muted">Tasks left</span>
                </div>
                <div className="todo-list">
                    <TodoList todo={increment} />
                </div>

            </div>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("name")} />
                    <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                    <button>+</button> 
                   
                </form> 
                {/* <TodoList /> */}

        </div >
    )
}

export default ToDo;