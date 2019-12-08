import * as React from "react";
import styled from "styled-components";
import LabelWidget from "../LabelWidget";

interface ISideBarProps {
  dataSource: [string, number][];
}

const Wrapper = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

const SideBar: React.FC<ISideBarProps> = (props) => {
  const tags = props.dataSource;
  return (
    <Wrapper>
    <h2>标签:</h2>
      <LabelWidget labels={tags} />
    </Wrapper>
  );
}

export default SideBar;