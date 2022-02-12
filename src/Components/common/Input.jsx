import styled from 'styled-components';
import { PALLETS } from 'Styles/theme';
import { forwardRef } from 'react';

export const Input = forwardRef(
  ({ width, placeholder, type = 'text', desc, ...props }, ref) => {
    return (
      <Container>
        <Inputspace
          ref={ref}
          type={type}
          width={width}
          placeholder={placeholder}
          {...props}
        />
        <Desc display={desc}>{desc}</Desc>
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: no-wrap;
`;

const Inputspace = styled.input`
  width: ${(props) => props.width || '100%'};
  border: 1px solid ${PALLETS.GRAYY};
  border-radius: 8px;
  margin: 0 5px;
  padding: 0 15px;
  height: 45px;
  &::placeholder {
    color: ${PALLETS.GRAY};
    font-size: 15px;
  }
`;

const Desc = styled.span`
  display: ${(props) => props.display || 'none'};
  margin-left: 10px;
`;
