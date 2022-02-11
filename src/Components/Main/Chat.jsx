import React from 'react'
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import {Input} from 'Components/common/Input';
import Button from 'Components/common/Button';
import {useSelector, useDispatch} from 'react-redux';

const Chat = () => {
  const dispatch = useDispatch();

  const userName = useSelector(state => state.login.userName);

  console.log(userName);


  return (
    <ChatBar>
      <ChatTitle>
        Here is OnBasic
      </ChatTitle>
      <ChatContent />
      <InputContent>
        <Input
          type="text"
          name="ChatContent"
          placeholder="메시지를 입력하세요."
        />
        <Button
          width="130px"
          height="50px"
          fontSize="25px"
          Content="전송"
        />
      </InputContent>
    </ChatBar>
  )
}

export default Chat;

const ChatBar = styled.div`
  width: 60%;
  background-color: ${PALLETS.SKY};
  margin: 0 auto;
`;

const ChatTitle = styled.div`
  display: flex;
  height: 100px;
  color: ${PALLETS.WHITE};
  background-color: ${PALLETS.BLUE};
  font-size: 24px;
`;

const ChatContent = styled.div`
  height: 675px;
  overflow-y: scroll;
`;

const InputContent = styled.div`
  height: 50px;
  display: flex;
`;
