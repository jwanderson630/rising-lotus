module.exports = {
  siteMetadata: {
    title: `Rising Lotus`,
    description: `TODO`,
    author: `@JoeAdotdev`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-transition-link`,
    //   options: {
    //     layout: require.resolve(`./src/components/layout.js`),
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rrqpzfiltegy`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "ckLEZFuRMonS8kB2KWR_SqWm1dwpG_asV6jRX0NyScw",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rising-lotus`,
        short_name: `rl`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
