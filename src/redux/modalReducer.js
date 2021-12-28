
const initialState = {
  showModal: false
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action,) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      console.log("in show modal action", action)
      return {
        showModal: true,
        modalType: action.payload.modalType
      }
    case 'HIDE_MODAL':
      return {
        ...state,
        showModal: false
      }
    default:
      return state;
  }
};
