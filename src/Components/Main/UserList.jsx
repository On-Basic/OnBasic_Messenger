import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import { DaProfile } from 'Assets/Images';


const UserList= () => {
  return (
    <List>
      <User>
        <UserImg src={DaProfile}/>
        <UserName>Da</UserName>
        <UserDate>yyyy-mm-dd hh:MM:ss</UserDate>
      </User>
    </List>
  );
};

export default UserList;

const User = styled.div`
  width: 350px;
  height: 100px;
  border : 0.3px solid ${PALLETS.BLACK};
  display: flex;
`;

const UserImg = styled.img`
  width: 60px;
  height: 60px;
  padding: 10px;
`;

const UserName = styled.span`
  height: 60px;
  font-size: 24px;
  padding: 20px 10px;
`;

const UserDate = styled.span`
  height: 60px;
  font-size: 15px;
  padding: 50px 10px;
`;

const List = styled.div``;