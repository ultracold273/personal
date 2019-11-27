import * as React from "react";
import styled from "styled-components";

import Container from "../Container";

const Wrapper = styled.footer`
  padding: 30px 0 40px;
  background-color: rgba(0, 0, 0, 0.03);
  overflow: auto;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  display: none;
  float: right;

  @media (min-width: 992px) {
    display: block;
  }
`;

const Footer: React.FC = (_, ref) => {
  return (
    <Wrapper ref={ref}>
      <Container>
        <Left>
          Blalabalal xiaomoxian
        </Left>
        <Right>
          lalalal
        </Right>
      </Container>
    </Wrapper>
  );
}

export default React.forwardRef(Footer);