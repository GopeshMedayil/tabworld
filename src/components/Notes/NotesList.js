import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../redux/actions';

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
            <h1>Notes List</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.note} <button onClick={() => removeNote(note.id)}>X</button></li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default NotesList;