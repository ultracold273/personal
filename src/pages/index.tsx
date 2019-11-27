import * as React from "react";
import { Row, Col } from "react-bootstrap";

import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import { countByTag } from "../utils/proc";

interface IIndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: [{
        node: {
          excerpt: string;
          fields: {
            slug: string;  
          }
          frontmatter: {
            date: string;
            tags: string[];
            title: string;
          }
        }
      }]
    }
  }  
}

export const data = graphql`
  query markdown {
    allMarkdownRemark(
      sort: {
        fields: frontmatter___date
        order: DESC
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            tags
            title
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }: IIndexPageProps) => {
  const posts = data.allMarkdownRemark.edges;
  const tags = posts.map((post) => (post.node.frontmatter.tags));
  const tagsCount = countByTag(tags);
  tagsCount.sort((a, b) => (a[1] < b[1] ? 1 : -1));
  return (
    <Layout>
      <Row>
        <Col lg={8}>
          {posts.map(({ node }) => {
            return (
              <div>
                <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
                </Link>
                <h4>{node.frontmatter.date}</h4>
                <p>{node.excerpt}</p>
              </div>
            );
          })}  
        </Col>
        <Col lg={4}>
          <h2>标签:</h2>
          {tagsCount.map(([k, v]) => {
            return (
              <div>
                <p>{k} - {v}</p>
              </div>
            );
          })}
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;