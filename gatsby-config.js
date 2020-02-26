module.exports = {
  siteMetadata: {
    title: `Build a Website - Webbyrå – Website Builder – Agenly`,
    description: `With Agenly you tell us about your business and we handle the rest. We use a combination between conversational UI and AI to create the best website for you.`,
    author: `@Agenly`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `modules`,
        path: `${__dirname}/src/images/modules`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-37970043-3",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://work.us15.list-manage.com/subscribe/post?u=9d724d30731ff3a65ee002961&amp;id=4fdde18145", // add your MC list endpoint here; see instructions below
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F1F1F1`,
        theme_color: `#F1F1F1`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
