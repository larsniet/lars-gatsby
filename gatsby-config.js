require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Lars van der Niet',
        author: 'Lars van der Niet',
        titleTemplate: '%s · Web development zonder haken en ogen',
        description: 'De lokale web developer waar u naar op zoek bent.',
        siteUrl: 'https://www.larsvanderniet.nl',
        image: 'logo.jpg',
        twitterUsername: '@larsvdniet',
    },
    plugins: [
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: process.env.DATO_API_TOKEN,
                preview: false,
                disableLiveReload: false,
            },
        },
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve(
                    './src/layouts/DefaultLayout/DefaultLayout.tsx'
                ),
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-190082437-1',
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Lars van der Niet`,
                description: `Web development zonder haken en ogen.`,
                lang: `nl`,
                short_name: `Lars`,
                start_url: `/`,
                background_color: `#f5f5f5`,
                theme_color: `#f5f5f5`,
                display: `standalone`,
                icon: 'src/images/logo.jpg',
                icon_options: {
                    purpose: `any maskable`,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                precachePages: ['/', '/about/', '/projects/*'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-plugin-webfonts',
            options: {
                fonts: {
                    google: [
                        {
                            family: 'Open Sans',
                            variants: ['100', '300', '500', '800'],
                        },
                    ],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.larsvanderniet.nl',
                sitemap:
                    'https://www.larsvanderniet.nl/sitemap/sitemap-index.html',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 75,
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
        {
            allSitePage {
                nodes {
                path
                }
            }
            allDatoCmsProject {
                nodes {
                slug
                meta {
                    updatedAt
                }
                }
            }
            }
        `,
                resolveSiteUrl: () => 'https://larsvanderniet.nl',
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    allDatoCmsProject: { nodes: allProjects },
                }) => {
                    return allPages.map((page) => {
                        return { ...page, ...allProjects[page.path] };
                    });
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    };
                },
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allDatoCmsProject } }) => {
                            return allDatoCmsProject.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    title: node.title,
                                    date: node.meta.publishedAt,
                                    description: node.description,
                                    url: `${site.siteMetadata.siteUrl}/projects/${node.slug}`,
                                    guid: `${site.siteMetadata.siteUrl}/projects/${node.slug}`,
                                });
                            });
                        },
                        query: `{
                            allDatoCmsProject {
                              nodes {
                                  title
                                  slug
                                  company
                                  description
                                  meta {
                                    publishedAt
                                  }
                                }
                            }
                        }`,
                        output: '/rss.xml',
                        title: 'Larsvanderniet.nl XML Feed',
                        match: '^/projects/',
                    },
                ],
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-plugin-mdx',
        'gatsby-transformer-sharp',
        'gatsby-plugin-netlify',
    ],
};
