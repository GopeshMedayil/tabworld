import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNotes } from "../../redux/actions";
import NotesList from './NotesList';

function Notes() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log("Notes", data)
        dispatch(addNotes(data));
    }

    return (
        <React.Fragment>
            <h1>Notes</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("note")} />
                <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                <button>Add Note</button>
            </form>
            <NotesList></NotesList>

        </React.Fragment>
    )
};

export default Notes;