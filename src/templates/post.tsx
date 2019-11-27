import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

interface IPostPageProps {
  data: {
    markdownRemark: {
      html: string;
      rawMarkdownBody: string;
      frontmatter: {
        title: string;
        date: string;
        tags: [];
      }
    }
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      frontmatter {
        title
        date
        tags
      }  
    }
  }
`;

const PostPage = ({ data }: IPostPageProps) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <h4>标签：{post.frontmatter.tags.map((tag) => {
        return (<a href={`/archives?tag=${tag}`}>{tag} </a>);
      })}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Layout>
  );
}

export default PostPage;