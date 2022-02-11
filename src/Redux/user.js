import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  if (action.type === 'USER_LOGIN') {
    return {
      ...state,
      userId: action.userId,
      userName: action.userName,
    };
  }
  return state;
};

export const store = createStore(reducer);