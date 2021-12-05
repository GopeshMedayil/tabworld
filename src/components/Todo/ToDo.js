import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import TodoList from "../Todo/TodoList";
import "./Todo.css"

function ToDo() {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (onSubmit) => {
        console.log('onSubmit', onSubmit);
        dispatch(addTodo({
            title: onSubmit.name,
            id: onSubmit.id,
            completed: false
        }));
        reset({
            name: "",
            id: ""

        })
    };
    return (
        <div>
            <div className="todo-container">
                <div className="todo-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" placeholder="Add your new todo" {...register("name")} />
                        <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                        <button>+</button>
                    </form>
                </div>
                <div className="todo-list">
                    <TodoList />
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