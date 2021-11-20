import React from 'react';

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