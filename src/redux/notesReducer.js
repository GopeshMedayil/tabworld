const initialState = {
    notes: []
};

export function notesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTES':
            return {
                notes: [...state.notes, action.payload]
            };
        case 'DELETE_NOTES':
            return {
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        default:
            return state;
    }
}