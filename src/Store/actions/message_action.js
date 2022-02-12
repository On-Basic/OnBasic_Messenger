import { createAction } from '@reduxjs/toolkit';
import { SEND_MESSAGE, DELETE_MESSAGE, REPLY_MESSAGE } from './type_action';

let MESSAGE_ID = 0;

export const sendMessage = createAction(
  SEND_MESSAGE,
  (userId, messageContent) => ({
    payload: {
      id: MESSAGE_ID++,
      userId,
      content: messageContent,
      // date: formatDate(),
      reply: null,
    },
  })
);

export const replyMessage = createAction(
  REPLY_MESSAGE,
  (userId, messageContent, replyMessageId) => ({
    payload: {
      id: MESSAGE_ID++,
      userId,
      content: messageContent,
      // date: formatDate(),
      replyMessageId,
    },
  })
);

// 삭제하기
export const deleteMessage = createAction(DELETE_MESSAGE);

export type MessengerAction = ActionType<typeof actions>;
