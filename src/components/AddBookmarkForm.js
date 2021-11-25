import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addBookmark } from "../redux/actions";

function AddBookmarkForm() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addBookmark(data));

    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("name")} />
                <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                <input {...register("url")} />
                <input type="submit" />
            </form>
        </React.Fragment>
    )
}


export default AddBookmarkForm;