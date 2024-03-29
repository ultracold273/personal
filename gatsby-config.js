module.exports = {
  siteMetadata: {
    title: "Lingxiao",
    description: "personal website, a researcher, programming involved in computer systems and AI-related stuff. Occasionally write essays.",
    baseUrl: "https://lxwei.me",
  },

  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents/posts`,
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography/typography`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {

      }
    },
  ]
}