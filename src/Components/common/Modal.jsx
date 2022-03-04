import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import Button from 'Components/common/Button';

const Modal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  message,
}) => {
  // const dispatch = useDispatch();
  console.log(message);

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  const Delete = (e) => {
    // dispatch({type: 'DELETE_CHAT', key: message});
    if(onClose) onClose(e);
  }

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
          {closable && (
            <Wrapper>
              <Button
                className="modal-close"
                ClickFunc={close}
                Width="120px"
                Height="50px"
                fontSize="25px"
                backgroundColor={PALLETS.WHITE}
                Color={PALLETS.BLUE}
                Content="취소"
              />
              <Button
                className="modal-close"
                ClickFunc={Delete}
                Width="120px"
                Height="50px"
                fontSize="25px"
                backgroundColor={PALLETS.BLUE}
                Color={PALLETS.WHITE}
                Content="확인"
              />
            </Wrapper>
          )}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${PALLETS.WHITE};
  border-radius: 10px;
  padding: 10px;
  width: 500px;
  height: 300px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 50px 30px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 150px 100px;
`;

export default Modal;
