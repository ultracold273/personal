import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "YYYY年M月D日")
        tags
      }  
    }
  }
`;

const Label = styled.a`
  box-shadow: none;
  font-size: 14px;
  cursor: pointer;
  padding: 2px 2px;

  & + & {
    margin-left: 5px;
  }
`;

const PostPage = ({ data }: IPostPageProps) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <h1>{post.frontmatter.title}</h1>
          <time>{post.frontmatter.date}</time>
          <h4>标签：{post.frontmatter.tags.map((tag) => {
            return (<Label href={`/archives?tag=${tag}`}>#{tag}</Label> );
          })}</h4>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </Col>
      </Row>
    </Layout>
  );
}

export default PostPage;