import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PALLETS } from 'Styles/theme';
import { ReplayICON } from 'Assets/Icons';
import { RemoveICON } from 'Assets/Icons';

const ReButton = ({ReplayFunc, RemoveFunc}) => {
  return (
    <>
    <ReplayBtn onClick={ReplayFunc}><ReIcon src={ReplayICON}></ReIcon></ReplayBtn>
    <RemoveBtn onClick={RemoveFunc}><ReIcon src={RemoveICON}></ReIcon></RemoveBtn>
    </>
  )
}

export default ReButton;

ReButton.propTypes={
  ReplayFunc: PropTypes.func,
  RemoveFunc: PropTypes.func,
};

ReButton.defaultProps={
  ReplayFunc: ()=>{},
  RemoveFunc: ()=>{},
};

const ReIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ReplayBtn = styled.button`
  background-color: ${PALLETS.SKY};
  border: none;
`;

const RemoveBtn = styled.button`
  background-color: ${PALLETS.SKY};
  border: none;
`;
