const path = require("path");
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
    let common = {
        ...defaultConfig,
        images: {
            unoptimized: true,
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "res.cloudinary.com",
                    pathname: "**",
                },
                {
                    protocol: "https",
                    hostname: "media.dev.to",
                    pathname: "**",
                },
            ],
        },
        sassOptions: {
            includePaths: [path.join(__dirname, "styles")],
        },
    };

    if (phase === PHASE_PRODUCTION_BUILD) {
        return {
            ...common,
            basePath: "/portfolio",
        };
    }
    return {
        ...common,
    };
};
