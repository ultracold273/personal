import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import PostSnippet from "../components/PostSnippet";
import { countByTag } from "../utils/proc";

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
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年M月D日")
            tags
            title
          }
        }
      }
    }
  }
`;

const PostWrapper = styled.div`
`;

const IndexPage = ({ data }: IIndexPageProps) => {
  const hidden_tag = "Hidden";
  const posts = data.allMarkdownRemark.edges.filter((post) => (
    !post.node.frontmatter.tags.includes(hidden_tag)
  ));
  const tags = posts.map((post) => (post.node.frontmatter.tags));
  const tagsCollection: [string, number][] = countByTag(tags);
  tagsCollection.sort((a, b) => (a[1] < b[1] ? 1 : -1));
  // console.log(tagsCollection);
  return (
    <Layout>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          {posts.map(({ node }) => (
              <PostSnippet key={node.id} data={node} />
          ))}
        </Col>
        <Col lg={2}>
          <SideBar dataSource={ tagsCollection }/>
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;