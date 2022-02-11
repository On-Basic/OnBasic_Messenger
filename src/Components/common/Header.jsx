import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import { HeaderLOGO } from 'Assets/Images/index';
import { HomeLOGO } from 'Assets/Icons/index';

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <HomeLogo src={HomeLOGO} />
        <Logo src={HeaderLOGO} />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${PALLETS.BLUE};
  display: flex;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const Wrapper = styled.div`
  justify-content: space-between;
  margin: 30px;
`;

const HomeLogo = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 30px;
`;

const Logo = styled.img`
  height: 40px;
`;
