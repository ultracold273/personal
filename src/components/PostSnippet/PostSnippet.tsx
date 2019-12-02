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

const PostSnippet: React.FC<IPostSnippetProps> = ({ data }) => {
  return (
    <header>
      <Link to={`/posts`.concat(data.fields.slug)}>
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