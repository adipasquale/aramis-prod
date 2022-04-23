module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("images")

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  // eleventyConfig.addPassthroughCopy("css/fonts");

  // Copy any .jpg file to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("index.js")
  eleventyConfig.addPassthroughCopy({
    "node_modules/lite-youtube-embed/src/lite-yt-embed.css":
      "lite-yt-embed.css",
  })
  eleventyConfig.addPassthroughCopy({
    "node_modules/lite-youtube-embed/src/lite-yt-embed.js": "lite-yt-embed.js",
  })
  eleventyConfig.addPassthroughCopy("admin/config.yml")

  eleventyConfig.addCollection("videosMusique", function (collectionApi) {
    return collectionApi
      .getFilteredByTags("video", "musique")
      .sort((a, b) => a.data.position - b.data.position)
  })

  eleventyConfig.addCollection("videosDocumentaires", function (collectionApi) {
    return collectionApi
      .getFilteredByTags("video", "documentaire")
      .sort((a, b) => a.data.position - b.data.position)
  })

  eleventyConfig.addCollection("videosStopmotion", function (collectionApi) {
    return collectionApi
      .getFilteredByTags("video", "stop-motion")
      .sort((a, b) => a.data.position - b.data.position)
  })

  eleventyConfig.addCollection("videosDrone", function (collectionApi) {
    return collectionApi
      .getFilteredByTags("video", "drones")
      .sort((a, b) => a.data.position - b.data.position)
  })
}
