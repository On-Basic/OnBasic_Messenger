import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PALLETS } from 'Styles/theme';

const Button = ({
  Width,
  Height,
  fontSize,
  backgroundColor,
  Color,
  Content,
  ClickFunc,
}) => {
  return (
    <Btn
      width={Width}
      height={Height}
      fontSize={fontSize}
      backgroundcolor={backgroundColor}
      color={Color}
      onClick={ClickFunc}>
        {Content}
      </Btn>
  );
}

export default Button;

Button.propTypes = {
  Width: PropTypes.string,
  Height: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  Color: PropTypes.string,
  Content: PropTypes.string,
  ClickFunc: PropTypes.func,
};

Button.defaultProps = {
  Width: '130px',
  Height: '50px',
  FontSize: '30px',
  backgroundColor: PALLETS.BLUE,
  Color: PALLETS.WHITE,
  Content: 'None',
  ClickFunc: () => {},
};

const Btn = styled.button`
  width: ${props=>props.width};
  height: ${props=>props.height};
  font-size: ${props=>props.fontSize};
  background-color: ${props=>props.backgroundcolor};
  color: ${props=>props.color};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;
