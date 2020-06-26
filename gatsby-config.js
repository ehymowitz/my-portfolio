module.exports = {
  siteMetadata: {
    title: "Elie Hymowitz",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.2, // Percentage of an element's area that needs to be visible to launch animation
        once: false, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      }
    }
  ]
}
