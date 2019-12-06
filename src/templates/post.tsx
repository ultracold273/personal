import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import { specialTags, theme } from "../../_config.json";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      fields {
        slug
      }
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

const Title = styled.h1`
  color: ${theme.color}
`;

const PostPage = ({ data }: IPostPageProps) => {
  const post = data.markdownRemark;
  const isMath = post.frontmatter.tags.includes(specialTags.math);
  const seo = { 
    title: post.frontmatter.title,
    path: post.fields.slug,
  };
  return (
    <>
      <SEO post={seo} />
      <Layout>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <Title>{post.frontmatter.title}</Title>
            <time>{post.frontmatter.date}</time>
            <h4>标签：{post.frontmatter.tags.map((tag) => {
              return (<Label href={`/archives?tag=${tag}`}>#{tag}</Label> );
            })}</h4>
            {/* <div dangerouslySetInnerHTML={{ __html: post.html }}/> */}
            <Markdown source={post.rawMarkdownBody} math={isMath}/>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default PostPage;