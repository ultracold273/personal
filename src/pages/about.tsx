import * as React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";

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
      <h1>{post.frontmatter.title}</h1>
      <time>{post.frontmatter.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Layout>
  );
}

export default AboutPage;