import React from 'react';

export const ADD_CLOCK = "ADD_CLOCK";
export function addClock(clockData) {
    return {
        type: ADD_CLOCK,
        payload: clockData
    };
}