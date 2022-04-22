import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNotes } from "../../redux/actions";
import Header from '../Header/Header';
import NotesList from './NotesList';

function Notes() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log("Notes", data);
        data.id = Date.now();
        data.color = '#' + Math.floor(Math.random() * 16777215).toString(16);

        dispatch(addNotes(data));
    }

    return (
        <React.Fragment>
            <div className="">
                {/* <h4 className="text-center text-muted p-2">Draft your ideas here !!</h4> */}
                <Header title="Draft your ideas here !!" showButton={false} borderColor="#97ed97"></Header>
                <div className="row align-items-end" style={{ 'padding': '10px' }}>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="input-group mb-3">
                            <textarea className="form-control" {...register("note", { required: true, maxLength: 80 })} />
                            {/* <input className="form-control" {...register("note")} placeholder="Type your ideas!!" /> */}
                            <input type="hidden" defaultValue={Date.now()} {...register('id')} />

                            <button className="btn btn-primary" type="submit" >Add Note</button>
                        </div>
                    </form>

                </div>

                <NotesList></NotesList>
            </div>

        </React.Fragment >
    )
};

export default Notes;