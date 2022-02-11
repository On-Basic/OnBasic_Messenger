const login = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        userId: action.userId,
        userName: action.userName,
        profileImage: action.profileImage,
      };
    default:
      return state;
  }
};

export default login;