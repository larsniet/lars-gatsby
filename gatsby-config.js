require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "Lars van der Niet",
    titleTemplate: "%s · Web development zonder haken en ogen",
    description:
      "De lokale web developer waar u naar op zoek bent.",
    siteUrl: "https://www.larsvanderniet.nl", // No trailing slash allowed!
    image: "logo.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@larsvdniet",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: 'f51b4da773becee7492542fc4c93bf',
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
        icon: "src/images/icon.png",
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ['Rubik', 'Anton', 'Lato']
        }
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
