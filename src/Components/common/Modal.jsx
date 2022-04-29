import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import { useState } from 'react';
import Button from 'Components/common/Button';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({contentId}) => {
  const [modalVisible, setmodalVisible] = useState(true);
  const dispatch = useDispatch();
  const chatItem = useSelector(state => state.messages[contentId]);

  const close = (e) => {
    setmodalVisible(!modalVisible);
  };
  const Delete = () => {
    dispatch({ type: 'DELETE_CHAT', key: contentId });
    setmodalVisible(!modalVisible);
  };
  return (
    <>
    {modalVisible &&
      <Container>
      <ModalWrapper>
        <ModalWindow>
          <Title>메시지 삭제</Title>
          <Content>메시지를 삭제하시겠습니까?</Content>
          <MsgWrapper>...메시지가 삭제됩니다.</MsgWrapper>
          <BtnWrapper>
            <Button
              ClickFunc={close}
              Width="100px"
              Height="50px"
              fontSize="20px"
              backgroundColor={PALLETS.WHITE}
              Color={PALLETS.BLUE}
              Content="취소"
            />
            <Button
              ClickFunc={Delete}
              Width="100px"
              Height="50px"
              fontSize="20px"
              backgroundColor={PALLETS.BLUE}
              Color={PALLETS.WHITE}
              Content="삭제"
            />
          </BtnWrapper>
        </ModalWindow>
      </ModalWrapper>
    </Container>}
    </>
  );
}

const Container = styled.div``;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWindow = styled.div`
  width: 400px;
  height: 300px;
  background-color: ${PALLETS.WHITE};
  position: relative;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  padding: 0 50px 20px 0;
`;

const Content = styled.h4``;

const MsgWrapper = styled.div`
  font-size: 14px;
`;

const BtnWrapper = styled.div`
  display: flex;
  margin: 150px 100px;
`;

export default Modal;
