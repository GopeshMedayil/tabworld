
const initialState = {
  showModal: false
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      console.log("in shpw modal")

      return {
        ...state,
        showModal: true
      }
    case 'HIDE_MODAL':
      return {
        ...state,
        showModal: false
      }
    default:
      return {
        state,
        modal: false
      }
  }
};
