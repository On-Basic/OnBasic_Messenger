import React from 'react';
import { Input } from 'Components/common/Input';
import Button from 'Components/common/Button';
import Header from 'Components/common/Header';
import { PALLETS } from 'Styles/theme';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <Header />
      <LoginWrapper>
        <LoginTitle>
          <span>OnBasic</span>
          <br />
          <span>Messenger</span>
        </LoginTitle>
        <SetImage></SetImage>
        <Input id={'-input'} width="200px" placeholder={'ID'} value={''} />
        <Input
          id={'-input'}
          width="200px"
          placeholder={'NICKNAME'}
          value={''}
        />
        <Button
          width={'495px'}
          height={'100px'}
          fontSize={'20px'}
          backgroundcolor={PALLETS.BLUE}
          color={'#000000'}
        />
      </LoginWrapper>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
`;

const LoginWrapper = styled.div``;

const LoginTitle = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

const SetImage = styled.div`
  width: 247px;
  height: 247px;
  border: 8px solid ${PALLETS.BLUE};
  border-radius: 50%;
`;
