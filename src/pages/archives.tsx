import * as React from "react";

import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import { URLSearchParams } from "url";

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
  let tag: string;
  let posts;
  if (search != "") {
    tag = decodeURI(search).substring(5); // TODO: Not elegant
  // let searchParams = new URLSearchParams(search);
  // console.log(searchParams.get("tag"));
  posts = data.allMarkdownRemark.edges.filter((post) => {
    return (post.node.frontmatter.tags.includes(tag))
  });
  } else {
    posts = data.allMarkdownRemark.edges;
  }
  console.log(posts);
  return (
    <Layout>
      {/* <LabelWidget /> */}
      {posts.map(({ node }) => {
        return (
          <div>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            {/* <h4>{node.frontmatter.date}</h4> */}
          </div>
        );
      })} 
    </Layout>
  )
};

export default ArchivePage;