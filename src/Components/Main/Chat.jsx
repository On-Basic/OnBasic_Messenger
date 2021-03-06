import React, {useState} from 'react';
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import { Input } from 'Components/common/Input';
import Button from 'Components/common/Button';
import ChatContentList from './ChatContentList';
import {useSelector, useDispatch} from 'react-redux'

const Chat = () => {
  const [InputMessage, setInputMessage] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector(state => state.login.userId);
  const userName = useSelector(state => state.login.userName);
  const onChange = e => {
    setInputMessage(e.target.value);
  };

  const Send = () => {
    setInputMessage('');
    dispatch({
      type: 'ADD_CHAT',
      userId: userId,
      userName: userName,
      message: InputMessage,
     });
     setInputMessage('');
  };

  const pressEnter = e => {
    if (e.key === 'Enter') {
      Send();
      setInputMessage('');
    }
  };

  return (
    <ChatBar>
      <Container>
        <ChatContentList/>
      </Container>
      <InputContent>
        <Input
          type="text"
          name="ChatContent"
          value={InputMessage}
          placeholder="메시지를 입력하세요."
          onChange={onChange}
          onKeyPress={pressEnter}
        />
        <Button 
          width="130px" 
          height="50px" 
          fontSize="25px" 
          Content="전송"
          ClickFunc={Send} 
        />
      </InputContent>
    </ChatBar>
  );
};

export default Chat;

const ChatBar = styled.div`
  background-color: ${PALLETS.SKY};
`;

const Container = styled.div`
  padding: 20px;
  z-index: 10;
  height: 700px;
  overflow-y: scroll;
`;

const InputContent = styled.div`
  height: 50px;
  display: flex;
`;
