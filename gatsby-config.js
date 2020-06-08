/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          {
          family: `Roboto Mono`,
          variants: [`400`, `700`]
          },
          {
          family: `Roboto`,
          subsets: [`latin`]
          },
        ],
      },
    }
  ],
}
