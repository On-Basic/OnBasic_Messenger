import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import ReButton from 'Components/common/ReButton';
import Modal from 'Components/common/Modal';
import { useSelector } from 'react-redux';

const ChatContentList = () => {
  const scrollRef = useRef(null);
  const chatList = useSelector(state => state.messages);
  const [modalVisible, setmodalVisible] = useState(false);

  const Replay = () => {
    console.log('답장 ... ');
  }

  const Remove = () => {
    setmodalVisible(!modalVisible);
  }

  return (
    <div ref={scrollRef}>
    {chatList.map((chatItem, idx) => {
      return(
        <UserWrapper>
      <div>
        <UserInfo>
          <UserInfo>{chatItem.userName}</UserInfo>
        </UserInfo>
        <ChatMessageContent>
          <Content>{chatItem.message}</Content>
        </ChatMessageContent>
      </div>
      <ReButton 
          ReplayFunc={Replay}
          RemoveFunc={Remove}
      />     
    {modalVisible&& 
     <Modal contentId={idx}/>}
    </UserWrapper>
      )
    })}   
  </div>
  );
};

export default ChatContentList;

const UserWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

const UserInfo = styled.div`
  margin-left: 10px;
`;

const ChatMessageContent = styled.div`
  flex: 1;
  margin: 10px;
  padding: 5px;
  background-color: ${PALLETS.WHITE};
  border: 1px solid ${PALLETS.WHITE};
  border-radius: 5px;
`;

const Content = styled.div`
  margin: 5px 10px;
`;
