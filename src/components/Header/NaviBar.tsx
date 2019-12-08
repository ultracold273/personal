import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { theme, menu } from "../../../_config.json";

const Nav = styled.nav`
  float: right;
  font-size: 16px;
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  display: inline;
  line-height: 60px;
  cursor: pointer;

  & + & {
    margin-left: 15px;
  }

  &:hover {
    color: ${theme.color};
  }
`;

const NaviBar: React.FC = () => {
  return (
    <Nav>
      <List>
        {(menu || []).map(({ name, url }) => (
          <Item>
            <Link to={url} key={name}>
              {name}
            </Link>
          </Item>
        ))}
      </List>  
    </Nav>
  );
}

export default NaviBar;