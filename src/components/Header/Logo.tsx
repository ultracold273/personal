import * as React from "react";
import styled from "styled-components";

interface ILogoProps {
  padding?: string;
}

interface IWrapperProps {
  padding: string;
}

const Wrapper = styled.div<IWrapperProps>`
  display: inline-block;
  padding: ${(props) => props.padding};
  cursor: pointer;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0;
  color: #333;
  font-size: 20px;
  text-transform: uppercase;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Icon = styled.img`
  display: inline-block;
  position: relative;
  top: 2px;
  margin: 0 5px;
  width: 20px;
  height: 20px;
`;

const Logo: React.FC<ILogoProps> = (props) => {
  const { padding = "0" } = props;
  return (
    <Wrapper padding={padding}>
      {/* <Link href="/"> */}
      <a href="/">
        <Title>
          {/* <Icon /> */}
          {/* <span>Lingxiao</span>   */}
          Lingxiao
        </Title>
      </a>
      {/* </Link> */}
    </Wrapper>
  );
}

export default Logo;