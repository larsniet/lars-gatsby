require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Lars van der Niet",
    author: "Lars van der Niet",
    titleTemplate: "%s · Web development zonder haken en ogen",
    description:
      "De lokale web developer waar u naar op zoek bent.",
    siteUrl: "https://www.larsvanderniet.nl", // No trailing slash allowed!
    image: "logo.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@larsvdniet",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve('./src/layouts/DefaultLayout/DefaultLayout.tsx')
        }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-190082437-1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Lars van der Niet`,
        description: `Web development zonder haken en ogen.`,
        lang: `nl`,
        short_name: `Lars`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#f5f5f5c7`,
        display: `standalone`,
        icon: "src/images/logo.jpg",
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ['/', '/about/', '/projects/*'],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Open Sans",
              variants: ["100", "300", "500", "800"],
            },
          ],
        },
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
