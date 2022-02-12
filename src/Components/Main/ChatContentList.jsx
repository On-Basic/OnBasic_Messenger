import styled from 'styled-components';

const ChatContentList = (replyData, userId) => {
  // const [message, setMessage] = useState();
  // const [isReply, setIsReply] = useState(false);

  //   useEffect(() => {
  //     if (replyData.id !== 0 && !isReply) {
  //       setMessage(
  //         `${replyData.userName}\n` +
  //           `${replyData.message}\n` +
  //           `(회신)\n` +
  //           message
  //       );
  //       setIsReply(true);
  //     }
  //   }, [replyData]);

  return (
    <Container>
      {/* user 1-1*/}
      <UserWrapper>
        <div>
          <ChatMessageProfile
            src="https://i.pinimg.com/564x/d8/f6/c8/d8f6c8953df073892c77e85f95f150ce.jpg"
            alt=""
          />
        </div>
        <div>
          <UserInfo>
            <UserInfo>다혜</UserInfo>
          </UserInfo>
          <ChatMessageContent>
            <Content>안녕하세요!</Content>
          </ChatMessageContent>
        </div>
      </UserWrapper>
      {/* user 2-1*/}
      <UserWrapper>
        <div>
          <ChatMessageProfile
            src="https://i.pinimg.com/564x/7a/d6/42/7ad642b810878fe3ae1b956321722cea.jpg"
            alt=""
          />
        </div>
        <div>
          <UserInfo>
            <UserInfo>서윤</UserInfo>
          </UserInfo>
          <ChatMessageContent>
            <Content>안녕하세요! 오늘 너무 정신 없네요=ㅅ=</Content>
          </ChatMessageContent>
        </div>
      </UserWrapper>
      {/* user 3-1*/}
      <UserWrapper>
        <div>
          <ChatMessageProfile
            src="https://i.pinimg.com/564x/12/e2/a3/12e2a389fed908a03c3412a961dd6f7f.jpg"
            alt=""
          />
        </div>
        <div>
          <UserInfo>
            <UserInfo>지연</UserInfo>
          </UserInfo>
          <ChatMessageContent>
            <Content>영차영차</Content>
          </ChatMessageContent>
        </div>
      </UserWrapper>
      {/* user 1-2*/}
      <UserWrapper>
        <div>
          <ChatMessageProfile
            src="https://i.pinimg.com/564x/d8/f6/c8/d8f6c8953df073892c77e85f95f150ce.jpg"
            alt=""
          />
        </div>
        <div>
          <UserInfo>
            <UserInfo>다혜</UserInfo>
          </UserInfo>
          <ChatMessageContent>
            <Content>다같이 영</Content>
          </ChatMessageContent>
        </div>
      </UserWrapper>
      {/* user 2-2*/}
      <UserWrapper>
        <div>
          <ChatMessageProfile
            src="https://i.pinimg.com/564x/7a/d6/42/7ad642b810878fe3ae1b956321722cea.jpg"
            alt=""
          />
        </div>
        <div>
          <UserInfo>
            <UserInfo>서윤</UserInfo>
          </UserInfo>
          <ChatMessageContent>
            <Content>차!</Content>
          </ChatMessageContent>
        </div>
      </UserWrapper>
    </Container>
  );
};

export default ChatContentList;

const Container = styled.div`
  padding: 20px;
  z-index: 10;
  height: 650px;
  overflow-y: scroll;
`;

const UserWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ChatMessageProfile = styled.img`
  object-fit: cover;
  width: 70px;
  height: 70px;
  border: 2px solid white;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  margin-left: 10px;
`;

const ChatMessageContent = styled.div`
  flex: 1;
  margin: 10px;
  padding: 5px;
  background-color: white;
  border: 1px solid white;
  border-radius: 5px;
`;

const Content = styled.div`
  margin: 5px 10px;
`;
