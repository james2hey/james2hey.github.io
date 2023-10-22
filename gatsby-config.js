module.exports = {
    graphqlTypegen: true,
    siteMetadata: {
        title: `James Toohey`,
        description: `James Toohey's portfolio website.`,
        author: `@james2hey`,
        siteUrl: 'https://toohey.dev',
        image: `/icons/icon-512x512.jpg`
    },
    plugins: [
        // `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sitemap`
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#f3f3f3`,
                theme_color: `#f3f3f3`,
                display: `minimal-ui`,
                icon: `src/assets/images/jt-logo.jpg` // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-123365106-1',
                head: true,
                anonymize: true,
                respectDNT: true,
                pageTransitionDelay: 0
            }
        },
        'gatsby-plugin-catch-links',
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`
    ]
};
