import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import PostSnippet from "../components/PostSnippet";
import { countByTag } from "../utils/proc";
import { specialTags } from "../../_config.json";

export const data = graphql`
  query blogs {
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
  margin-top: 20px;
`;

const BlogPage = ({ data }: IIndexPageProps) => {
  const posts = data.allMarkdownRemark.edges.filter((post) => (
    !post.node.frontmatter.tags.includes(specialTags.hidden)
  ));
  const tags = posts.map((post) => (post.node.frontmatter.tags));
  const tagsCollection: [string, number][] = countByTag(tags);
  // Remove math tags
  tagsCollection.filter((tagPair) => (tagPair[0] !== specialTags.math));
  tagsCollection.sort((a, b) => (a[1] < b[1] ? 1 : -1));
  return (
    <>
      <SEO post={{ title: "博客", path: "/blog" }} />
      <Layout>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <PostWrapper>
            {posts.map(({ node }) => (
                <PostSnippet key={node.id} data={node} />
            ))}
            </PostWrapper>
          </Col>
          <Col lg={2}>
            <SideBar dataSource={ tagsCollection }/>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default BlogPage;