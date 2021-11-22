import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";



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
                    <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                    <input  {...register("name")} />
                    <button>Add</button>
                </form>
            </div>

        </div>
    )
}

export default ToDo;