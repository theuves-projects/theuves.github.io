const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

module.exports = withMDX({
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'mdx'],
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                fs: "empty",
            }
        }

        return config
    },
})
