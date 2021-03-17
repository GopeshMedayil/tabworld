const LOAD_TIMES = "loadTimes";

export const loadTimes = () => ({
  type: LOAD_TIMES
});

const initialState = {
  tzs: [
    {
      id: 1,
      name: "Brussels",
      tz: "Europe/Berlin"
    },
    {
      id:2,
      name:'Australia',
      tz:"Australia/Sydney"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TIMES:
      return state;
    default:
      return state;
  }
};
