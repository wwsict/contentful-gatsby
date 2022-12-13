require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful Starter",
    description: "Official Contentful Gatsby Starter",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Smart-Home Guide`,
        short_name: `SH Guide`,
        description: `Guide for residents of the ABC123 Smart Home`,
        start_url: `/`,
        background_color: `#0a68f0`,
        theme_color: `#0a68f0`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `src/images/icon.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `src/images/icon.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      },
    },
    `gatsby-plugin-offline`,
  ],
};
