import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
      <Link to="/">
        <Title>
          {/* <Icon /> */}
          <span>Lingxiao</span>  
        </Title>
      </Link>
    </Wrapper>
  );
}

export default Logo;