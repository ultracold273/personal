module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/contents`,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {

      }
    },
  ]
}