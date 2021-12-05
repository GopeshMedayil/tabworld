import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import TodoList from "../Todo/TodoList";

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
            Todo
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="todo-container">
                        <input className="form-control" {...register("name")} />
                        <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                        <button>+</button>

                    </div>
                </form>
                <TodoList />
            </div>

        </div >
    )
}

export default ToDo;