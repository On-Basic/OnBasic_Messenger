import React from 'react';

const MessageInputArea = ({ value, onChange, onEnter, textRef }) => {
  return (
    <textarea
      name="message"
      id="message"
      placeholder="메세지를 입력해주세요"
      onChange={onChange}
      value={value}
      onPress={onEnter}
      ref={textRef}
    />
  );
};

export default MessageInputArea;
