import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../redux/actions';
import './Notes.css';

function NotesList() {

    const dispatch = useDispatch();
    const notes = useSelector(state => state.notesReducer.notes);
    console.log("Notes list", notes);
    const removeNote = (noteId) => {
        console.log("noteId", noteId)
        dispatch(deleteNote(noteId));
    }
    return (
        <React.Fragment>
            <div className="notes-container" >
                {notes.map(note => (

                    <div key={note.id} className="item" style={{ "background": note.color }}>
                        {/* <div className="delete-btn"> */}
                        {/* <button type="button" onClick={() => removeNote(note.id)} class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        <i class="bi bi-x-lg float-end px-2" onClick={() => removeNote(note.id)}></i>
                        {/* <button onClick={() => removeNote(note.id)}>X</button> */}
                        {/* </div> */}
                        <div className="p-2">
                            {note.note}
                        </div>

                    </div>

                ))}
            </div>
        </React.Fragment >
    )
}

export default NotesList;