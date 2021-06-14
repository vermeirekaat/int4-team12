const withFonts = require('next-fonts');

const nextConfig = withFonts({
    webpack(config, options) {
        return config;
    }
});

nextConfig.images = {
    domains: ['ichef.bbci.co.uk'],
}

module.exports = nextConfig;