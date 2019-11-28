import * as React from "react";
import querystring from "querystring";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

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
  let posts;
  if (Object.keys(query).length == 0) {
    posts = data.allMarkdownRemark.edges;
  } else {
    const tag = query.tag as string;  // Maybe harmful
    posts = data.allMarkdownRemark.edges.filter((post) => 
      (post.node.frontmatter.tags.includes(tag))
    );
  }
  return (
    <Layout>
      {/* <LabelWidget /> */}
      {posts.map(({ node }) => {
        return (
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            {/* <h4>{node.frontmatter.date}</h4> */}
          </div>
        );
      })} 
    </Layout>
  );
};

export default ArchivePage;