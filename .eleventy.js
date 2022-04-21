module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts/");
  eleventyConfig.addPassthroughCopy("styles/");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.setLibrary(
    'md', require('markdown-it')({ html: true })
      .use(require('markdown-it-highlightjs/core'), {
        hljs: ((hljs) => {
          hljs.configure({
            classPrefix: ''
          });

          return hljs;
        })(require('highlight.js'))
      })
      .use(require('markdown-it-link-attributes'), {
        matcher(href, config) {
          return href.startsWith("https:");
        },
        attrs: {
          target: '_blank'
        }
      })
  );
};