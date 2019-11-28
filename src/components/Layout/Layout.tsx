import * as React from "react";
import styled from "styled-components";

import Container from "../Container";
import Header from "../Header";
import Footer from "../Footer";

import 'bootstrap/dist/css/bootstrap-grid.css';

interface IMainProps {
  minHeight: string;
}

const Main = styled.main<IMainProps>`
min-height: 100px;
padding-bottom: 30px;
overflow: hidden;
margin-top: 50px;

@media (min-width: 992px) {
  margin-top: 70px;
}
`;

const Layout: React.FC = (props) => {
  const [minHeight, setMinHeight] = React.useState('auto');
  const headerRef: React.Ref<HTMLElement> = React.createRef();
  const footerRef: React.Ref<HTMLDivElement> = React.createRef();

  React.useEffect(() => {
    const headerHeight = headerRef.current!.offsetHeight;
    const footerHeight = footerRef.current!.offsetHeight;
    if (headerHeight && footerHeight) {
      setMinHeight(`calc(100vh - ${headerHeight}px - ${footerHeight}px)`);
    }
  }, [headerRef, footerRef]);

  return (
    <>
      <Main minHeight={minHeight}>
        <Header ref={headerRef} />
        <Container>{props.children}</Container>
        <Footer ref={footerRef} />
      </Main>
    </>
  );
}

export default Layout;