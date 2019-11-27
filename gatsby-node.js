// import { createFilePath } from "gatsby-source-filesystem";
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query createPage {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { slug: slug },
    })
  })
}