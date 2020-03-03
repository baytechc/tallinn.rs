module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy("index.html")
  eleventyConfig.addPassthroughCopy("CNAME")

  return {
    dir: { input: 'pages' }
  }
};
