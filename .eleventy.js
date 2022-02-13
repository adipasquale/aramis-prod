const urlParser = require("js-video-url-parser");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("images");

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  // eleventyConfig.addPassthroughCopy("css/fonts");

  // Copy any .jpg file to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("index.js");

  eleventyConfig.addFilter("toYoutubeEmbedUrl", (url) =>
    `https://www.youtube.com/embed/${urlParser.parse(url).id}?enablejsapi=1&modestbranding=1`
  )
};
