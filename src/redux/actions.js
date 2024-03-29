
export const ADD_CLOCK = "ADD_CLOCK";
export function addClock(clockData) {
    console.log("addclock", clockData)
    return {
        type: ADD_CLOCK,
        payload: clockData
    };
}

export function showModal(obj) {
    console.log("showModal clickedS", obj)
    return {
        type: 'SHOW_MODAL',
        payload: {
            showModal: true,
            modalType: obj.modalType
        }

    };
}

export function hideModal() {
    console.log("Hide clicked")
    return {
        type: 'HIDE_MODAL',
        showModal: false
    };
}


/**
 * Method to add a new todo
 * @param {*} todo 
 * @returns 
 */
export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}
/**
 * 
 */

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        payload: id
    };
}

/**
 * Method to toggle the todo
 * @param {*} id 
 * @returns 
 */
export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    };
}

/**
 * Method to add a new bookmark
 * @param {*} bookmark 
 * @returns 
 */
export function addBookmark(bookmark) {
    console.log("inside bookmark action")
    return {
        type: 'ADD_BOOKMARK',
        payload: bookmark
    };
}

/**
 * Action to handle the addition of notes
 * @param {*} notes 
 * @returns 
 */
export function addNotes(notes) {
    console.log("inside notes action")
    return {
        type: 'ADD_NOTES',
        payload: notes
    };
};

/**
 * Action to remove the notes
 * @param {*} id 
 * @returns 
 */

export function deleteNote(id) {
    return {
        type: 'DELETE_NOTE',
        payload: id
    };
}