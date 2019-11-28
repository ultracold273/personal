import * as React from "react";
import styled from "styled-components";

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
          {tags.map(([k, v]) => {
            return (
              <div key={k}>
                <a href={`/archives?tag=${k}`}>
                <p>{k} - {v}</p>
                </a>
              </div>
            );
    })}
    </Wrapper>
  );
}

export default SideBar;