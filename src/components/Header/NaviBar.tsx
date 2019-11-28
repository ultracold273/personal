import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { theme, menu } from "../../../_config.json";

const Nav = styled.nav`
  float: right;
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
          <Link to={url} key={name}>
            <Item>{name}</Item>  
          </Link>
        ))}
      </List>  
    </Nav>
  );
}

export default NaviBar;