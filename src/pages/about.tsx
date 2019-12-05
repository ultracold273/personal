import * as React from "react";
import { graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";

import Layout from "../components/Layout";
import Markdown from "../components/Markdown";

export const query = graphql`
  query about {
    markdownRemark(fields: { slug: { eq: "/about-me/" } }) {
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

const AboutPage = ({ data }: IPostPageProps) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <h1>{post.frontmatter.title}</h1>
          <time>{post.frontmatter.date}</time>
          {/* <div dangerouslySetInnerHTML={{ __html: post.html }}/> */}
          <Markdown source={post.rawMarkdownBody} />
        </Col>
      </Row>
    </Layout>
  );
}

export default AboutPage;