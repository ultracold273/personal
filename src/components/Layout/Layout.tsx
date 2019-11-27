import * as React from "react";
import styled from "styled-components";

import Container from "../Container";

const Layout: React.FC = (props) => {
  const Main = styled.main`
    min-height: 100px;
    padding-bottom: 30px;
    overflow: hidden;
    margin-top: 50px;

    @media (min-width: 992px) {
      margin-top: 70px;
    }
  `;

  return (
    <>
      <Main>
      <Container>{props.children}</Container>
      </Main>
    </>
  );
}

export default Layout;