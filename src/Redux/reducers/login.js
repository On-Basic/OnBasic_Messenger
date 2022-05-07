const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userId: action.userId,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default login;
