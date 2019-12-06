import * as React from "react";
import querystring from "querystring";
import { Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";
import { countByTag } from "../utils/proc";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import LabelWidget from "../components/LabelWidget";
import { specialTags } from "../../_config.json";

export const data = graphql`
  query archive {
    allMarkdownRemark(
      sort: {
        fields: frontmatter___date
        order: DESC
      }
    ) {
      edges {
        node {
          id
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

const ArchivePage = ({ data, location: { search } }: IArchivesPageProps) => {
  const query = querystring.parse(search.substring(1));
  let posts = data.allMarkdownRemark.edges.filter((post) =>
    !(post.node.frontmatter.tags.includes(specialTags.hidden))
  );
  const tags = posts.map((post) => (post.node.frontmatter.tags));
  const tagsCollection: [string, number][] = countByTag(tags);
  tagsCollection.sort((a, b) => (a[1] < b[1] ? 1 : -1));
  
  if (Object.keys(query).length != 0) {
    const tag = query.tag as string;  // Maybe harmful? type coersion
    posts = data.allMarkdownRemark.edges.filter((post) => 
      (post.node.frontmatter.tags.includes(tag))
    );
  }
  return (
    <>
      <SEO post={{ title: "归档", path: "/archives" }} />
      <Layout>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <LabelWidget labels={ tagsCollection } />
            {posts.map(({ node }) => {
              return (
                <div key={node.id}>
                  <Link to={`/posts`.concat(node.fields.slug)}>
                  <h3>{node.frontmatter.title}</h3>
                  </Link>
                  {/* <h4>{node.frontmatter.date}</h4> */}
                </div>
              );
            })}
        </Col>
        </Row>
      </Layout>
    </>
  );
};

export default ArchivePage;