import { INITIAL_MESSAGE } from 'userData';

const messenger = (state = INITIAL_MESSAGE, action) => {
  switch (action.type) {
    case 'SEND_CHAT':
      return [
        ...state,
        {
          userId: action.userId,
          userName: action.userName,
          profileImage: action.profileImage,
          sendDate: action.sendDate,
          message: action.message,
        },
      ];
    default:
      return state;
  }
};

export default messenger;