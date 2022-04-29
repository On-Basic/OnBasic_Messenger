const INITIAL_MODAL_STATE = {
  showModal: false,
};

const modals = (state = INITIAL_MODAL_STATE, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return {
        ...state,
        showModal: true,
        content: action.content,
      };
    case 'MODAL_CLOSE':
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default modals;
