/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {

        NEXT_APP_API_URL: 'https://api.brahmikalp.com/api/',

        //main env

        NEXT_APP_URL: 'https://www.ashwarin.com',
        NEXT_APP_API_KEY: 'QpcJdmRwcsufJDdOyakcyhMEpnsWtzMilyyGSIYhhCpPWJUOgM',

        NEXT_APP_API_URL_SHOPIFY: "https://webapi.brahmikalp.com"

    },

    images: {
        unoptimized: true,

    },
    trailingSlash: true,

    output: "export",
    reactStrictMode: false

}

module.exports = nextConfig;
