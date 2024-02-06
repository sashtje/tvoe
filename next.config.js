const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const config = withSvgr({
  images: {
    formats: ["image/webp"],
  },
});

module.exports = config;
