module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy("index.html")

  return {
    dir: { input: 'pages' }
  }
};
