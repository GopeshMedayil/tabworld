/**
 * Reducer to handle bookmark state
 */

const initialState = {
    bookmarks: []
}

export default function bookmarkReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOKMARK':
            console.log("inside reducer bookmark", action)
            return {
                bookmarks: [...state.bookmarks, action.payload]
            }
        case 'DELETE_BOOKMARK':
            return {
                bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload)
            }
        default:
            return {
                bookmarks: []
            }
    }
}