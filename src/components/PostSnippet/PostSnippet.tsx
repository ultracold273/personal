import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { theme } from "../../../_config.json";

interface IPostSnippetProps {
  data: NodeProps;
}

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  color: ${theme.color};
  cursor: pointer;
`;

const Meta = styled.div`
  margin-bottom: 1rem;
  color: #757575;
  font-size: 14px;
`;

const DateTime = styled.time`
  margin-right: 10px;
`;

const Labels = styled.span`
  margin-right: 10px;
`;

const Label = styled.a`
  box-shadow: none;
  cursor: pointer;

  & + & {
    margin-left: 5px;
  }
`;

const PostSnippet: React.FC<IPostSnippetProps> = ({ data }) => {
  return (
    <header>
      <Link to={data.fields.slug}>
        <Title>{data.frontmatter.title}</Title>
      </Link>
      <Meta>
        <DateTime>{data.frontmatter.date}</DateTime>
        <p>{data.excerpt}</p>
      </Meta>
    </header>
  );
};

export default PostSnippet;