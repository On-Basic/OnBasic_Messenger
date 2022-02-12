import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import ReButton from 'Components/common/ReButton';

const ChatContentList = ({chatItem}) => {
  return (
      <UserWrapper>
        <div>
          <ChatMessageProfile
            src={chatItem.profileImage}
          />
        </div>
        <div>
          <UserInfo>
            <UserInfo>{chatItem.userName}</UserInfo>
          </UserInfo>
          <ChatMessageContent>
            <Content>{chatItem.message}</Content>
          </ChatMessageContent>
        </div>
        <ReButton />
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
