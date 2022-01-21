import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addBookmark, hideModal } from "../../redux/actions";

function AddBookmarkForm(props) {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addBookmark(data));
        dispatch(hideModal());
    }
    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="mb-2 col-md-12">
                        <label htmlFor="label" className="form-label">Name</label>

                        <input className="form-control"  {...register("name", { required: true })} autoComplete="off" />
                        <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                    </div>
                    <div className="mb-4 col-md-12">
                        <label htmlFor="timezone" className="form-label">URL</label>
                        <input className="form-control" {...register("url")} />


                    </div>

                    <input type="submit" className="btn btn-primary" />
                </form>

            </div>
        </React.Fragment>
    )
}


export default AddBookmarkForm;