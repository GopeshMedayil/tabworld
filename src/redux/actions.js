
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