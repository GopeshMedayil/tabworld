import { ADD_CLOCK } from "./actions";

const LOAD_TIMES = "LOAD_TIMES";



const initialState = {
  tzs: [
    {
      id: 1,
      timezone: "Brussels",
      tz: "Europe/Berlin"
    },
    {
      id: 2,
      timezone: 'Australia',
      tz: "Australia/Sydney"
    }
  ]
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TIMES:
      return state;
    case ADD_CLOCK:
      let newClock = { ...state };
      newClock.tzs.push(action.payload);
      return newClock
    default:
      return state
  }
};
