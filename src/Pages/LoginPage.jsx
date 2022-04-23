import React from 'react';
import Header from 'Components/common/Header';
import Login from 'Components/Login/Login';
import { PALLETS } from 'Styles/theme';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <Header />
      <LoginWrapper>
        <MainLogo>OnBasic Messenger</MainLogo>
        <LoginInput>
          <Login />
        </LoginInput>
      </LoginWrapper>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${PALLETS.BLACK};
  position: relative;
  text-align: center;
  display: flex;
  item-aligns: center;
`;

const LoginWrapper = styled.div`
  width: 300px;
  position: absolute;
  left: 50%;
  top: 150%;
  margin-left: -150px;
`;

const MainLogo = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin: 10px 0;
`;

const LoginInput = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0;
`;
