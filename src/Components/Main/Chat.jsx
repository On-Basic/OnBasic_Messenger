import React from 'react'
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import {Input} from 'Components/common/Input';
import Button from 'Components/common/Button';
import { DaProfile } from 'Assets/Images';

const Chat = () => {
  return (
    <ChatBar>
      <ChatTitle>
        <UserImg src={DaProfile}/>
        <UserName>Da</UserName>
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
  background-color: ${PALLETS.GRAY};
`;

const UserImg = styled.img`
  width: 60px;
  height: 60px;
  padding: 10px;
`;

const UserName = styled.div`
  height: 60px;
  font-size: 24px;
  padding: 20px;
`;

const ChatContent = styled.div`
  height: 700px;
  overflow-y: scroll;
`;

const InputContent = styled.div`
  height: 50px;
  display: flex;
`;
