import * as React from "react";
import styled from "styled-components";

import Container from "../Container";
import { site } from "../../../_config.json";

const Wrapper = styled.footer`
  margin-top: 40px;
  padding: 30px 0 40px;
  background-color: rgba(0, 0, 0, 0.03);
  overflow: auto;
`;

const Left = styled.div`
  float: left;
  color: #aaa;
`;

const Right = styled.div`
  display: none;
  float: right;
  color: #aaa;

  @media (min-width: 992px) {
    display: block;
  }
`;

const Footer: React.FC = (_, ref) => {
  return (
    <Wrapper ref={ref}>
      <Container>
        <Left>
          {site.slogan}
        </Left>
        <Right>
          Lingxiao &copy; 2019
        </Right>
      </Container>
    </Wrapper>
  );
}

export default React.forwardRef(Footer);