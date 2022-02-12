import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import ReButton from 'Components/common/ReButton';
import Modal from 'Components/common/Modal';

const ChatContentList = ({ chatItem }) => {
  const scrolleRef = useRef(null);
  const chatState = useSelector((state) => state.message);
  const [modalVisible, setmodalVisible] = useState(false);

  const scrollToBottom = useCallback(() => {
    if (chatState) {
      scrolleRef.current?.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [chatState]);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  const Replay = () => {
    console.log('답장 ... ');
  }

  const Remove = () => {
    setmodalVisible(!modalVisible);
    console.log(modalVisible);
  }

  const closeModal = () => {
    setmodalVisible(false);
  }

  return (
    <UserWrapper>
      <div>
        <ChatMessageProfile src={chatItem.profileImage} ref={scrolleRef} />
      </div>
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
       {modalVisible && 
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
          >
            삭제하시겠습니까?
          </Modal>}        
    </UserWrapper>
  );
};

export default ChatContentList;

const UserWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ChatMessageProfile = styled.img`
  object-fit: cover;
  width: 70px;
  height: 70px;
  border: 2px solid ${PALLETS.WHITE};
  border-radius: 50%;
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
