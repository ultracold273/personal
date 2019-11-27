import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Container from "../Container";

interface IHeaderProps {
  height?: number;
}

interface IWrapperProps {
  readonly visible: boolean;
}

// tslint:disable-next-line
const Wrapper = styled.header<IWrapperProps>`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  transition: opacity ease-out 0.3s;
  overflow: hidden;
  z-index: ${(props) => (props.visible ? 233 : -18)};
`;

const Header: React.FC<IHeaderProps> = (_, ref) => {
  return (
    <Wrapper visible={true} ref={ref}>
      <Container>
        <Link to="/">
          Home
        </Link>
      </Container>  
    </Wrapper>
  );
}

export default React.forwardRef(Header);