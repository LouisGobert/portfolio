const path = require("path");

module.exports = {
    // Add the basePath only in production
    basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
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
};
