import { INITIAL_MESSAGE } from "userData";

const messages = (state = INITIAL_MESSAGE, action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return [
        ...state,
        {
          userId: action.userId,
          userName: action.userName,
          message: action.message,
        },
      ];
    case 'DELETE_CHAT':
      return state.filter((chat, idx) => idx !== action.key);
    default:
      return state;
  }
};

export default messages;
