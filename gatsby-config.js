module.exports = {
  siteMetadata: {
    title: `Agenly, Your personal webagency, that only gets better over time. We create your website through AI.`,
    description: `Website creator. You tell us about your business and we handle the rest. We use a combination between conversational UI and AI to create the best website for you.`,
    author: `@William Martinsson`,
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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://work.us15.list-manage.com/subscribe/post?u=9d724d30731ff3a65ee002961&amp;id=4fdde18145', // add your MC list endpoint here; see instructions below
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f5eae3`,
        theme_color: `#f5eae3`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
